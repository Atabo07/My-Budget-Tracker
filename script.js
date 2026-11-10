/* SpendWise: browser-based personal finance tracker.
   Data is stored locally in this browser using localStorage. */
const STORAGE_KEY = "spendwise_complete_v1";
const currencySymbols = {KES:"KSh", USD:"$", EUR:"€", GBP:"£", UGX:"USh", TZS:"TSh"};
const today = new Date().toISOString().slice(0,10);

const defaultState = {
  budget: 0,
  currency: "KES",
  income: [],
  expenses: [],
  savings: {name:"Emergency fund", target:0, current:0}
};

let state = loadState();
let categoryChart = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      income: Array.isArray(saved.income) ? saved.income : [],
      expenses: Array.isArray(saved.expenses) ? saved.expenses : [],
      savings: {...defaultState.savings, ...(saved.savings || {})}
    };
  } catch (error) {
    console.warn("Could not load saved SpendWise data:", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function money(value) {
  const symbol = currencySymbols[state.currency] || state.currency;
  return `${symbol} ${Number(value || 0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}`;
}

function sum(records) {
  let total = 0;
  for (const record of records) total += Number(record.amount) || 0;
  return total;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

function allTransactions() {
  return [
    ...state.income.map(item => ({...item, type:"Income"})),
    ...state.expenses.map(item => ({...item, type:"Expense"}))
  ].sort((a,b) => b.date.localeCompare(a.date) || b.createdAt-a.createdAt);
}

function setMessage(id, message, isError=false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.style.color = isError ? "#b42318" : "#16834a";
}

function renderDashboard() {
  const income = sum(state.income);
  const expenses = sum(state.expenses);
  const balance = income - expenses;
  const budgetUsed = state.budget > 0 ? (expenses/state.budget)*100 : 0;
  const savingsPercent = state.savings.target > 0 ? Math.min(100,(state.savings.current/state.savings.target)*100) : 0;

  document.getElementById("dashBudget").textContent = money(state.budget);
  document.getElementById("dashIncome").textContent = money(income);
  document.getElementById("dashExpenses").textContent = money(expenses);
  document.getElementById("dashBalance").textContent = money(balance);
  document.getElementById("budgetProgress").style.width = `${Math.min(100,budgetUsed)}%`;
  document.getElementById("budgetPercent").textContent = `${Math.round(budgetUsed)}% used`;
  document.getElementById("budgetRemaining").textContent = state.budget > 0 ? `${money(Math.max(0,state.budget-expenses))} left` : "No budget set";
  const status = document.getElementById("budgetStatus");
  if (!state.budget) status.textContent = "Set a monthly budget in Settings to track your spending.";
  else if (expenses > state.budget) status.textContent = `You are ${money(expenses-state.budget)} over your budget. Review your expenses.`;
  else status.textContent = `Good progress. You have ${money(state.budget-expenses)} of your budget remaining.`;
  document.getElementById("dashSavings").innerHTML = `${money(state.savings.current)} <span>saved</span>`;
  document.getElementById("savingsProgress").style.width = `${savingsPercent}%`;
  document.getElementById("savingsPercent").textContent = `${Math.round(savingsPercent)}% complete`;
  document.getElementById("savingsTarget").textContent = `Goal: ${money(state.savings.target)}`;

  const rows = allTransactions().slice(0,6);
  document.getElementById("dashboardTransactions").innerHTML = rows.length ? rows.map(item => `
    <tr><td>${escapeHTML(item.description)}</td>
    <td><span class="type-pill ${item.type.toLowerCase()}">${item.type}</span></td>
    <td>${escapeHTML(item.date)}</td>
    <td class="${item.type==="Income"?"amount-positive":"amount-negative"}">${item.type==="Income"?"+":"−"}${money(item.amount)}</td></tr>`).join("") :
    '<tr><td colspan="4" class="empty-cell">No transactions yet. Add your first income or expense.</td></tr>';
}

function renderExpenses() {
  const total = sum(state.expenses);
  document.getElementById("expensePageTotal").textContent = money(total);
  document.getElementById("expensePageCount").textContent = `${state.expenses.length} expense record(s)`;
  const search = (document.getElementById("expenseSearch").value || "").toLowerCase();
  const category = document.getElementById("expenseFilter").value;
  const filtered = state.expenses.filter(item =>
    item.description.toLowerCase().includes(search) &&
    (category === "all" || item.category === category)
  ).sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById("expenseTable").innerHTML = filtered.length ? filtered.map(item => `
    <tr><td>${escapeHTML(item.description)}</td><td>${escapeHTML(item.category)}</td>
    <td>${escapeHTML(item.date)}</td><td class="amount-negative">${money(item.amount)}</td>
    <td><button class="delete-row" data-delete-expense="${item.id}" aria-label="Delete ${escapeHTML(item.description)}">Delete</button></td></tr>`).join("") :
    '<tr><td colspan="5" class="empty-cell">No matching expenses found.</td></tr>';
}

function renderIncome() {
  document.getElementById("incomePageTotal").textContent = money(sum(state.income));
  document.getElementById("incomePageCount").textContent = `${state.income.length} income record(s)`;
  document.getElementById("incomeTable").innerHTML = state.income.length ? [...state.income].sort((a,b)=>b.date.localeCompare(a.date)).map(item => `
    <tr><td>${escapeHTML(item.description)}</td><td>${escapeHTML(item.category)}</td>
    <td>${escapeHTML(item.date)}</td><td class="amount-positive">${money(item.amount)}</td>
    <td><button class="delete-row" data-delete-income="${item.id}" aria-label="Delete ${escapeHTML(item.description)}">Delete</button></td></tr>`).join("") :
    '<tr><td colspan="5" class="empty-cell">No income recorded yet.</td></tr>';
}

function renderSavings() {
  const goal = state.savings;
  const percent = goal.target > 0 ? Math.min(100,goal.current/goal.target*100) : 0;
  document.getElementById("savingsGoalName").textContent = goal.name || "Your savings goal";
  document.getElementById("savingsPageCurrent").textContent = money(goal.current);
  document.getElementById("savingsPageTarget").textContent = `of ${money(goal.target)} target`;
  document.getElementById("savingsPageProgress").style.width = `${percent}%`;
  document.getElementById("savingsPagePercent").textContent = `${Math.round(percent)}% complete`;
  document.getElementById("savingsLeft").textContent = `${money(Math.max(0,goal.target-goal.current))} to go`;
  document.getElementById("savingsName").value = goal.name;
  document.getElementById("savingsTargetInput").value = goal.target || "";
  document.getElementById("savingsCurrentInput").value = goal.current || "";
}

function renderReports() {
  const income = sum(state.income), expenses = sum(state.expenses);
  document.getElementById("reportIncome").textContent = money(income);
  document.getElementById("reportExpenses").textContent = money(expenses);
  document.getElementById("reportNet").textContent = money(income-expenses);
  document.getElementById("reportCount").textContent = state.income.length + state.expenses.length;
  document.getElementById("averageExpense").textContent = money(state.expenses.length ? expenses/state.expenses.length : 0);
  document.getElementById("largestExpense").textContent = money(state.expenses.length ? Math.max(...state.expenses.map(x=>x.amount)) : 0);
  const percent = state.savings.target > 0 ? Math.min(100,state.savings.current/state.savings.target*100) : 0;
  document.getElementById("reportSavings").textContent = `${Math.round(percent)}%`;
  const totals = {};
  for (const expense of state.expenses) totals[expense.category] = (totals[expense.category] || 0) + Number(expense.amount);
  const labels = Object.keys(totals);
  const fallback = document.getElementById("chartFallback");
  if (categoryChart) { categoryChart.destroy(); categoryChart = null; }
  if (labels.length && window.Chart) {
    fallback.hidden = true;
    categoryChart = new Chart(document.getElementById("categoryChart"), {
      type:"doughnut",
      data:{labels,datasets:[{data:labels.map(label=>totals[label]),backgroundColor:["#16834a","#3e83b7","#e49a43","#8a6bb8","#d36c58","#53a6a0","#a4a94d","#71808d","#cf85a6"],borderWidth:2,borderColor:"#ffffff"}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{boxWidth:10,font:{size:10}}}}}
    });
  } else {
    fallback.hidden = false;
    fallback.textContent = labels.length ? "Chart library could not load. Check your internet connection." : "Add expenses to display your category report.";
  }
}

function renderSettings() {
  document.getElementById("settingsBudget").value = state.budget || "";
  document.getElementById("settingsCurrency").value = state.currency;
  document.getElementById("currencyChip").textContent = `${state.currency} · ${currencySymbols[state.currency] || state.currency}`;
  document.querySelectorAll(".currency-label").forEach(el => el.textContent = currencySymbols[state.currency] || state.currency);
}

function renderAll() {
  renderDashboard();
  renderExpenses();
  renderIncome();
  renderSavings();
  renderReports();
  renderSettings();
}

const pageNames = {dashboard:"Dashboard",expenses:"Expenses",income:"Income",savings:"Savings",reports:"Reports",learning:"Learning Centre",settings:"Settings"};
function showPage(page) {
  if (!pageNames[page]) page = "dashboard";
  document.querySelectorAll(".page").forEach(section => section.classList.toggle("active",section.id===`page-${page}`));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active",link.dataset.page===page));
  document.getElementById("pageTitle").textContent = pageNames[page];
  if (page==="reports") renderReports();
  window.scrollTo({top:0,behavior:"smooth"});
}
function routeFromHash() {
  showPage((location.hash || "#dashboard").slice(1));
}
window.addEventListener("hashchange",routeFromHash);

document.getElementById("expenseDate").value = today;
document.getElementById("incomeDate").value = today;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("todayLabel").textContent = new Date().toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long"}).toUpperCase();

document.getElementById("expenseForm").addEventListener("submit",event=>{
  event.preventDefault();
  const description = document.getElementById("expenseDescription").value.trim();
  const amount = Number(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;
  const date = document.getElementById("expenseDate").value;
  if (!description || !category || !date || !Number.isFinite(amount) || amount<=0) return setMessage("expenseMessage","Enter a valid description, category, date and amount.",true);
  state.expenses.push({id:crypto.randomUUID(),description,amount,category,date,notes:document.getElementById("expenseNotes").value.trim(),createdAt:Date.now()});
  saveState(); event.target.reset(); document.getElementById("expenseDate").value=today;
  setMessage("expenseMessage","Expense saved successfully.");
  renderAll();
});

document.getElementById("incomeForm").addEventListener("submit",event=>{
  event.preventDefault();
  const description=document.getElementById("incomeDescription").value.trim();
  const amount=Number(document.getElementById("incomeAmount").value);
  const category=document.getElementById("incomeCategory").value;
  const date=document.getElementById("incomeDate").value;
  if(!description||!category||!date||!Number.isFinite(amount)||amount<=0) return setMessage("incomeMessage","Enter valid income details and an amount greater than zero.",true);
  state.income.push({id:crypto.randomUUID(),description,amount,category,date,createdAt:Date.now()});
  saveState(); event.target.reset(); document.getElementById("incomeDate").value=today;
  setMessage("incomeMessage","Income saved successfully."); renderAll();
});

document.getElementById("savingsForm").addEventListener("submit",event=>{
  event.preventDefault();
  const name=document.getElementById("savingsName").value.trim();
  const target=Number(document.getElementById("savingsTargetInput").value);
  const current=Number(document.getElementById("savingsCurrentInput").value);
  if(!name||!Number.isFinite(target)||target<=0||!Number.isFinite(current)||current<0) return setMessage("savingsMessage","Enter a goal name, a target above zero and a valid saved amount.",true);
  state.savings={name,target,current}; saveState(); setMessage("savingsMessage","Savings goal updated."); renderAll();
});

document.getElementById("settingsForm").addEventListener("submit",event=>{
  event.preventDefault();
  const budget=Number(document.getElementById("settingsBudget").value);
  const currency=document.getElementById("settingsCurrency").value;
  if(!Number.isFinite(budget)||budget<0) return setMessage("settingsMessage","Budget must be zero or a positive number.",true);
  state.budget=budget; state.currency=currency; saveState();
  setMessage("settingsMessage","Your settings have been saved."); renderAll();
});

document.getElementById("expenseSearch").addEventListener("input",renderExpenses);
document.getElementById("expenseFilter").addEventListener("change",renderExpenses);

document.addEventListener("click",event=>{
  const expenseButton=event.target.closest("[data-delete-expense]");
  const incomeButton=event.target.closest("[data-delete-income]");
  if(expenseButton){
    const item=state.expenses.find(x=>x.id===expenseButton.dataset.deleteExpense);
    if(item && confirm(`Delete expense "${item.description}"?`)){
      state.expenses=state.expenses.filter(x=>x.id!==item.id); saveState(); renderAll();
    }
  }
  if(incomeButton){
    const item=state.income.find(x=>x.id===incomeButton.dataset.deleteIncome);
    if(item && confirm(`Delete income "${item.description}"?`)){
      state.income=state.income.filter(x=>x.id!==item.id); saveState(); renderAll();
    }
  }
});

function csvCell(value) { return `"${String(value ?? "").replace(/"/g,'""')}"`; }
document.getElementById("exportCsv").addEventListener("click",()=>{
  const records=allTransactions();
  if(!records.length){alert("There are no transactions to export yet.");return;}
  const lines=[["Description","Type","Category","Date","Amount"],...records.map(x=>[x.description,x.type,x.category,x.date,x.amount])];
  const csv=lines.map(row=>row.map(csvCell).join(",")).join("\n");
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob); const link=document.createElement("a");
  link.href=url; link.download="spendwise-transactions.csv"; link.click(); URL.revokeObjectURL(url);
});

document.getElementById("downloadBackup").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob); const link=document.createElement("a");
  link.href=url; link.download="spendwise-backup.json"; link.click(); URL.revokeObjectURL(url);
  setMessage("dataMessage","Backup downloaded.");
});

document.getElementById("clearData").addEventListener("click",()=>{
  if(!confirm("This will permanently remove all SpendWise records saved in this browser. Download a backup first if you need one. Continue?")) return;
  state=structuredClone(defaultState); saveState(); renderAll();
  setMessage("dataMessage","All tracker data has been cleared.");
});

routeFromHash();
renderAll();
