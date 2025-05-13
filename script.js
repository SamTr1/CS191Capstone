let income = 0;
let expense = 0;
let needs = 0;
let wants = 0;
let savings = 0;

function toggleSection(id) {
  const card = document.getElementById(id);
  card.classList.toggle('active');
  const arrow = card.querySelector('.arrow');
  if (arrow) {
    arrow.innerHTML = card.classList.contains('active') ? '&#9650;' : '&#9660;';
  }
}

function addIncome() {
  const input = document.getElementById('incomeInput');
  const descInput = document.getElementById('incomeDesc');
  const value = parseFloat(input.value);
  const description = descInput.value.trim();

  if (!isNaN(value) && description !== '') {
    income += value;
    document.getElementById('incomeValue').textContent = `$${income}`;

    const incomeList = document.getElementById('incomeList');
    const entry = document.createElement('div');
    entry.classList.add('item');
    entry.innerHTML = `<div class="label">${description}</div><div class="amount">$${value.toFixed(2)}</div>`;
    incomeList.appendChild(entry);

    input.value = '';
    descInput.value = '';
  }
}

function addExpense() {
  const input = document.getElementById('expenseInput');
  const descInput = document.getElementById('expenseDesc');
  const value = parseFloat(input.value);
  const description = descInput.value.trim();

  if (!isNaN(value) && description !== '') {
    expense += value;
    document.getElementById('expenseValue').textContent = `$${expense}`;

    const expenseList = document.getElementById('expenseList');
    const entry = document.createElement('div');
    entry.classList.add('item');
    entry.innerHTML = `<div class="label">${description}</div><div class="amount">$${value.toFixed(2)}</div>`;
    expenseList.appendChild(entry);

    input.value = '';
    descInput.value = '';
  }
}


function addNeeds() {
  const input = document.getElementById('needsInput');
  const descInput = document.getElementById('needsDesc');
  const value = parseFloat(input.value);
  const description = descInput.value.trim();

  if (!isNaN(value) && description !== '') {
    needs += value;
    document.getElementById('needsValue').textContent = `$${needs}`;

    const list = document.getElementById('needsList');
    const entry = document.createElement('div');
    entry.classList.add('item');
    entry.innerHTML = `<div class="label">${description}</div><div class="amount">$${value.toFixed(2)}</div>`;
    list.appendChild(entry);

    input.value = '';
    descInput.value = '';
  }
}

function addWants() {
  const input = document.getElementById('wantsInput');
  const descInput = document.getElementById('wantsDesc');
  const value = parseFloat(input.value);
  const description = descInput.value.trim();

  if (!isNaN(value) && description !== '') {
    wants += value;
    document.getElementById('wantsValue').textContent = `$${wants}`;

    const list = document.getElementById('wantsList');
    const entry = document.createElement('div');
    entry.classList.add('item');
    entry.innerHTML = `<div class="label">${description}</div><div class="amount">$${value.toFixed(2)}</div>`;
    list.appendChild(entry);

    input.value = '';
    descInput.value = '';
  }
}

function addSavings() {
  const input = document.getElementById('savingsInput');
  const descInput = document.getElementById('savingsDesc');
  const value = parseFloat(input.value);
  const description = descInput.value.trim();

  if (!isNaN(value) && description !== '') {
    savings += value;
    document.getElementById('savingsValue').textContent = `$${savings}`;

    const list = document.getElementById('savingsList');
    const entry = document.createElement('div');
    entry.classList.add('item');
    entry.innerHTML = `<div class="label">${description}</div><div class="amount">$${value.toFixed(2)}</div>`;
    list.appendChild(entry);

    input.value = '';
    descInput.value = '';
  }
}


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


