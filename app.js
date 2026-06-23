const MONTHS = Array.from({ length: 12 }, (_, index) => index + 1);
const MONTH_LABELS = MONTHS.map((month) => `2026-${String(month).padStart(2, "0")}`);
const EXTENDED_PERIODS = [
  ...MONTH_LABELS,
  ...Array.from({ length: 6 }, (_, index) => `2027-${String(index + 1).padStart(2, "0")}`)
];

const demoIndexRows = [
  [2019,1,1408349.35,0.4929785674,2816932.10,813425.04,897274.14],[2019,2,1197712.07,0.4251831523,2899508.51,1354181.40,550200.88],[2019,3,1337167.93,0.4611705485,2995547.92,1642986.53,613401.98],[2019,4,1484729.60,0.4956454177,3280034.28,1755846.08,667418.10],[2019,5,1747027.93,0.5326248999,3342056.94,914453.48,756589.71],[2019,6,1395332.70,0.4175071595,3446801.73,948257.37,630022.42],[2019,7,1361037.05,0.3948695506,3812857.37,966666.40,619004.26],[2019,8,1527381.78,0.4005871796,4226087.84,574079.09,715027.01],[2019,9,1685831.03,0.3989105513,4978722.07,1138253.36,800700.58],[2019,10,2014934.39,0.4047091526,7083422.48,1564808.33,943855.00],[2019,11,4072336.35,0.5749108375,7324530.84,2104858.27,1845276.04],[2019,12,8620775.17,1.1769730182,4081731.97,697805.82,3548104.81],
  [2020,1,3132521.10,0.767452,4744903.00,1853922.80,1262551.00],[2020,2,2519697.20,0.531032,4663618.00,1750286.10,1051003.00],[2020,3,2703263.80,0.579643,4852620.00,2072512.00,1100956.00],[2020,4,2900744.40,0.597774,4849422.00,1652102.00,1125008.00],[2020,5,3010961.20,0.620880,4903201.00,1721020.00,1214392.00],[2020,6,2863590.70,0.584073,5060110.00,1822115.00,1161487.00],[2020,7,2961281.60,0.585222,5149802.00,1602209.00,1213202.00],[2020,8,3192001.40,0.619829,5421120.00,1943366.00,1285940.00],[2020,9,3549861.90,0.654825,6110211.00,2275385.00,1400510.00],[2020,10,4105114.10,0.671849,6782204.00,2504500.00,1580920.00],[2020,11,6260457.70,0.923090,6811835.00,2692071.90,2291247.00],[2020,12,11401961.00,1.8567770559,4172856.00,2298750.24,3976893.00],
  [2021,1,3934111.50,0.942497,5110040.00,2538840.00,1642025.00],[2021,2,3602518.20,0.704984,5348771.00,2824170.00,1492322.00],[2021,3,4301279.00,0.804146,5882210.00,3401120.00,1760400.00],[2021,4,4588012.10,0.780003,6471310.00,3525100.00,1882400.00],[2021,5,4954021.20,0.765526,7017020.00,3420295.00,2032814.00],[2021,6,4593380.30,0.654641,7461500.00,3301175.00,1881100.00],[2021,7,5008742.00,0.671300,7988330.00,3504200.00,2060070.00],[2021,8,5439201.40,0.681000,8745550.00,3799030.00,2241510.00],[2021,9,5953010.90,0.680693,10388100.00,4900230.00,2522400.00],[2021,10,7118440.70,0.685211,12122000.00,5703020.00,3120000.00],[2021,11,10548592.30,0.870192,13433200.00,6734500.00,4431300.00],[2021,12,17097239.00,1.9015097979,5852658.00,5476849.38,6800832.00],
  [2022,1,6165382.20,1.053315,8769550.00,5354410.00,2793911.00],[2022,2,5576821.50,0.635935,9091210.00,4533110.00,2451020.00],[2022,3,6710702.90,0.738173,10881000.00,6642100.00,2861120.00],[2022,4,7243899.70,0.665724,12315500.00,6350110.00,3042780.00],[2022,5,7374022.10,0.598744,13877100.00,6523910.00,3124100.00],[2022,6,7322101.00,0.527646,14899200.00,6044330.00,3088990.00],[2022,7,7901000.80,0.530300,15881200.00,6210090.00,3431200.00],[2022,8,8292331.20,0.522137,17004200.00,6992310.00,3729910.00],[2022,9,9056600.90,0.532628,18655400.00,7791000.00,4182010.00],[2022,10,10832210.10,0.580661,20723000.00,8822100.00,4890910.00],[2022,11,15910200.80,0.767764,21533000.00,9225096.81,7029900.00],[2022,12,27056017.14,1.3696335339,14911735.19,4012157.19,12800934.40],
  [2023,1,8642220.10,0.579538,15790100.00,5290020.00,4114020.00],[2023,2,7678990.40,0.486317,15188000.00,5022100.00,3412000.00],[2023,3,8750440.20,0.576120,16333300.00,6519000.00,3853020.00],[2023,4,8992100.50,0.550519,17001200.00,5812200.00,3761120.00],[2023,5,9035010.70,0.531424,18990100.00,7773310.00,3750900.00],[2023,6,9452211.30,0.497743,20311200.00,6662900.00,4013000.00],[2023,7,10550301.50,0.519422,21110400.00,7044100.00,4612000.00],[2023,8,10944202.10,0.518421,22255000.00,7821050.00,4871020.00],[2023,9,11390500.20,0.511817,23122900.00,8504020.00,4922900.00],[2023,10,13633110.40,0.589600,24699100.00,10440110.00,6103200.00],[2023,11,18800697.20,0.761191,24719900.00,12671125.00,7901600.00],[2023,12,29503902.78,1.2028816809,13377529.37,3291245.00,13283358.54],
  [2024,1,11041910.10,0.825431,13500200.00,5140320.00,5208020.00],[2024,2,9394100.30,0.695846,13333310.00,3842110.00,4065010.00],[2024,3,10699200.40,0.802440,14402000.00,5120210.00,4654090.00],[2024,4,10651120.20,0.739569,14804420.00,4802230.00,4461100.00],[2024,5,10531110.40,0.711350,17344520.00,6802110.00,4392010.00],[2024,6,11111440.10,0.640788,18900600.00,5840010.00,4710210.00],[2024,7,12520010.20,0.662416,19220700.00,5432300.00,5433010.00],[2024,8,12889920.70,0.670627,20711200.00,6654120.00,5798000.00],[2024,9,11523291.32,0.8267548254,17614640.05,11252751.26,4921996.37],[2024,10,14360730.58,0.8152724404,23704048.20,12617172.11,6423937.26],[2024,11,18612691.42,0.7852115075,21406613.28,8444462.49,7917348.08],[2024,12,26777414.17,1.2508944698,12716061.94,5021835.58,11667092.00],
  [2025,1,9825856.01,0.7727121853,11740704.96,2990636.84,4501494.56],[2025,2,8298682.86,0.7068300318,11310267.07,3363626.54,3580157.02],[2025,3,9480111.15,0.8381863214,12499473.13,5171939.76,4079916.53],[2025,4,9713758.26,0.7771334165,13052001.16,5454207.66,4058290.36],[2025,5,9575104.64,0.7336119973,15638868.39,7596922.23,3888153.99],[2025,6,10012697.02,0.6402443432,17097686.48,5710836.12,4225782.02],[2025,7,11612617.35,null,null,null,null],[2025,8,11942212.39,null,null,null,null],[2025,9,12543442.38,null,null,null,null],[2025,10,14337859.98,null,null,null,null],[2025,11,18848326.43,null,null,null,null],[2025,12,27501404.39,null,null,null,null]
];

const state = {
  workbookData: null,
  financeData: null,
  file: null,
  financeFile: null,
  salesForecast: MONTHS.map((month) => ({ month, period: MONTH_LABELS[month - 1], salesForecast: 0 })),
  lastBaseRows: [],
  lastBaseCsv: ""
};

const elements = {
  fileInput: document.getElementById("fileInput"),
  financeFileInput: document.getElementById("financeFileInput"),
  dropzone: document.getElementById("dropzone"),
  pickFileButton: document.getElementById("pickFileButton"),
  pickFinanceFileButton: document.getElementById("pickFinanceFileButton"),
  selectedFileText: document.getElementById("selectedFileText"),
  selectedFinanceFileText: document.getElementById("selectedFinanceFileText"),
  loadDemoButton: document.getElementById("loadDemoButton"),
  parseButton: document.getElementById("parseButton"),
  messagePanel: document.getElementById("messagePanel"),
  messageBox: document.getElementById("messageBox"),
  generateSalesButton: document.getElementById("generateSalesButton"),
  clearSalesButton: document.getElementById("clearSalesButton"),
  runForecastButton: document.getElementById("runForecastButton"),
  downloadCsvButton: document.getElementById("downloadCsvButton"),
  salesInputTable: document.getElementById("salesInputTable"),
  summaryPanel: document.getElementById("summaryPanel"),
  detailPanel: document.getElementById("detailPanel"),
  nextYearPanel: document.getElementById("nextYearPanel"),
  diagnosticPanel: document.getElementById("diagnosticPanel"),
  kpiGrid: document.getElementById("kpiGrid"),
  scenarioTable: document.getElementById("scenarioTable"),
  detailTable: document.getElementById("detailTable"),
  nextYearKpiGrid: document.getElementById("nextYearKpiGrid"),
  nextYearTable: document.getElementById("nextYearTable"),
  inventoryChart: document.getElementById("inventoryChart"),
  cashChart: document.getElementById("cashChart"),
  diagnosticList: document.getElementById("diagnosticList"),
  heroPurchase: document.getElementById("heroPurchase")
};

const numberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const percentFormat = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1 });

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toNumber(value, fallback = 0) {
  const parsed = Number(String(value ?? "").replaceAll(",", ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function showMessage(type, summary, details = []) {
  elements.messagePanel.classList.remove("hidden");
  elements.messageBox.className = type === "error" ? "is-error" : type === "warning" ? "is-warning" : "is-success";
  const list = details.length ? `<ul>${details.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  elements.messageBox.innerHTML = `<h3>${escapeHtml(summary)}</h3>${list}`;
}

function isAllowedFile(file) {
  return /\.(xlsx|xls)$/i.test(file.name);
}

function setSelectedFile(file) {
  state.file = file || null;
  elements.selectedFileText.textContent = file ? `已選擇：${file.name}` : "尚未選擇檔案";
}

function setSelectedFinanceFile(file) {
  state.financeFile = file || null;
  elements.selectedFinanceFileText.textContent = file ? `已選擇：${file.name}` : "尚未選擇檔案";
}

function median(values, fallback = 0) {
  const clean = values.filter((value) => Number.isFinite(value) && value > 0).sort((a, b) => a - b);
  if (!clean.length) return fallback;
  const mid = Math.floor(clean.length / 2);
  return clean.length % 2 ? clean[mid] : (clean[mid - 1] + clean[mid]) / 2;
}

function sum(values) {
  return values.reduce((total, value) => total + (Number.isFinite(value) ? value : 0), 0);
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function ceilToRounding(value, rounding) {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return Math.ceil(value / rounding) * rounding;
}

function latestSameMonth(rows, key, month, fallback = 0) {
  const matches = rows.filter((row) => row.month === month && Number.isFinite(row[key]) && row[key] > 0).sort((a, b) => a.year - b.year);
  return matches.length ? matches[matches.length - 1][key] : fallback;
}

function blendedSameMonth(rows, key, month, fallback = 0, latestWeight = 0.7) {
  const matches = rows.filter((row) => row.month === month && Number.isFinite(row[key]) && row[key] > 0).sort((a, b) => a.year - b.year);
  if (!matches.length) return fallback;
  const latest = matches[matches.length - 1][key];
  const med = median(matches.map((row) => row[key]), fallback);
  return latestWeight * latest + (1 - latestWeight) * med;
}

function buildDemoData() {
  const indexRows = demoIndexRows.map(([year, month, revenue, revenueInventoryRatio, inventory, purchasePlan, cogs]) => ({
    year, month, revenue, revenueInventoryRatio, inventory, purchasePlan, cogs,
    cogsRate: revenue && cogs ? cogs / revenue : null,
    purchaseToCogs: purchasePlan && cogs ? purchasePlan / cogs : null
  }));
  return { sourceName: "網站內建範例資料", indexRows, dailyRows: [] };
}

function normalizeHeader(value) {
  return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function parseIndexSheet(workbook) {
  const sheet = workbook.Sheets.Index || workbook.Sheets.index;
  if (!sheet) throw new Error("找不到 Index sheet");
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
  const body = rows.slice(1).filter((row) => row[0] !== undefined && row[1] !== undefined);
  return body.map((row) => {
    const year = toNumber(row[0], NaN);
    const month = toNumber(row[1], NaN);
    const revenue = toNumber(row[2], NaN);
    const revenueInventoryRatio = toNumber(row[3], NaN);
    const inventory = toNumber(row[4], NaN);
    const purchasePlan = toNumber(row[5], NaN);
    const cogs = toNumber(row[6], NaN);
    return {
      year, month, revenue, revenueInventoryRatio, inventory, purchasePlan, cogs,
      cogsRate: revenue > 0 && cogs > 0 ? cogs / revenue : null,
      purchaseToCogs: purchasePlan > 0 && cogs > 0 ? purchasePlan / cogs : null
    };
  }).filter((row) => Number.isFinite(row.year) && Number.isFinite(row.month));
}

function parseDailySheet(workbook) {
  const sheet = workbook.Sheets["Daily sales 2019-2026"];
  if (!sheet) return [];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
  return rows.slice(1).map((row) => {
    let date = row[0];
    if (typeof date === "number") {
      const parsed = XLSX.SSF.parse_date_code(date);
      date = parsed ? new Date(parsed.y, parsed.m - 1, parsed.d) : null;
    } else if (date) {
      date = new Date(date);
    }
    const fulfilledSales = toNumber(row[1], NaN);
    if (!date || Number.isNaN(date.getTime()) || !Number.isFinite(fulfilledSales)) return null;
    return { date, year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), fulfilledSales };
  }).filter(Boolean);
}

async function parseWorkbookFile(file) {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
  const indexRows = parseIndexSheet(workbook);
  const dailyRows = parseDailySheet(workbook);
  if (!indexRows.length) throw new Error("Index sheet 沒有可用資料");
  return { sourceName: file.name, indexRows, dailyRows };
}

function sheetRows(workbook, name) {
  const sheet = workbook.Sheets[name];
  if (!sheet) throw new Error(`Finance workbook 找不到 ${name} sheet`);
  return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, blankrows: true, defval: null });
}

function rowValues(rows, rowNumber, startIndex, endIndex, absolute = false) {
  const row = rows[rowNumber - 1] || [];
  return Array.from({ length: endIndex - startIndex + 1 }, (_, offset) => {
    const value = toNumber(row[startIndex + offset], 0);
    return absolute ? Math.abs(value) : value;
  });
}

function financeCell(rows, rowNumber, index, absolute = false) {
  const value = toNumber((rows[rowNumber - 1] || [])[index], 0);
  return absolute ? Math.abs(value) : value;
}

async function parseFinanceWorkbookFile(file) {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
  const salesVersion = sheetRows(workbook, "Sales Version");
  const pnlY26 = sheetRows(workbook, "PnL Y26 (HL US+Multi)");
  const pnlY25 = sheetRows(workbook, "PnL Y25 (HL US+Multi)");
  const bsCon = sheetRows(workbook, "BS Con");
  const apCc = sheetRows(workbook, " AP and CC Projection");

  const sales = rowValues(salesVersion, 81, 2, 13);
  const cogs = rowValues(salesVersion, 82, 2, 13, true);
  const grossProfit = rowValues(salesVersion, 85, 2, 13);
  const existingPurchaseEta = rowValues(salesVersion, 88, 2, 13);
  const existingInvoiceReceived = rowValues(salesVersion, 89, 2, 13);

  return {
    sourceName: file.name,
    sales,
    cogs,
    grossProfit,
    y25Sales: rowValues(pnlY25, 4, 3, 14),
    y25NetIncome: rowValues(pnlY25, 44, 3, 14),
    netIncome: rowValues(pnlY26, 44, 3, 14),
    existingPurchaseEta,
    existingInvoiceReceived,
    inventoryFound: rowValues(pnlY26, 14, 3, 14),
    inventoryLost: rowValues(pnlY26, 15, 3, 14, true),
    inventoryLostReversal: rowValues(pnlY26, 16, 3, 14),
    shipping: rowValues(pnlY26, 18, 3, 14, true),
    tariff: rowValues(pnlY26, 19, 3, 14, true),
    prep: rowValues(pnlY26, 20, 3, 14, true),
    storage: rowValues(pnlY26, 21, 3, 14, true),
    ltsf: rowValues(pnlY26, 22, 3, 14, true),
    labor: rowValues(pnlY26, 23, 3, 14, true),
    advertising: rowValues(pnlY26, 24, 3, 14, true),
    taxes: rowValues(pnlY26, 28, 3, 14, true),
    legal: rowValues(pnlY26, 30, 3, 14, true),
    dues: rowValues(pnlY26, 31, 3, 14, true),
    otherExpenses: rowValues(pnlY26, 34, 3, 14, true),
    amazonCashBack: rowValues(pnlY26, 57, 3, 14),
    bsCash: rowValues(bsCon, 3, 37, 48),
    bsInventory: rowValues(bsCon, 6, 37, 48),
    bsInTransit: rowValues(bsCon, 7, 37, 48),
    bsAp: rowValues(bsCon, 19, 37, 48),
    bsCc: rowValues(bsCon, 20, 37, 48),
    openingCash: financeCell(bsCon, 3, 36),
    openingInventory: financeCell(bsCon, 6, 36),
    openingInTransit: financeCell(bsCon, 7, 36),
    apCashPayment: rowValues(apCc, 62, 41, 52, true),
    apCcPayment: rowValues(apCc, 63, 41, 52, true),
    ccBalance: rowValues(apCc, 80, 41, 52, true),
    ccPayment: rowValues(apCc, 90, 41, 52, true)
  };
}

function monthlyDailySales(dailyRows) {
  const map = new Map();
  dailyRows.forEach((row) => {
    const key = `${row.year}-${row.month}`;
    map.set(key, (map.get(key) || 0) + row.fulfilledSales);
  });
  return map;
}

function generateDefaultSalesForecast(data, forecastYear = 2026) {
  if (!data.dailyRows.length) {
    return MONTHS.map((month) => {
      const lastYearRevenue = latestSameMonth(data.indexRows, "revenue", month, 0);
      return { month, period: MONTH_LABELS[month - 1], salesForecast: lastYearRevenue, status: "Last available same-month revenue" };
    });
  }

  const monthly = monthlyDailySales(data.dailyRows);
  const annual = new Map();
  for (const [key, value] of monthly.entries()) {
    const [year] = key.split("-").map(Number);
    if (year < forecastYear) annual.set(year, (annual.get(year) || 0) + value);
  }
  const completeYears = Array.from(annual.keys()).sort((a, b) => a - b);
  const yoy = [];
  for (let index = 1; index < completeYears.length; index += 1) {
    const previous = annual.get(completeYears[index - 1]);
    const current = annual.get(completeYears[index]);
    if (previous > 0) yoy.push(current / previous - 1);
  }
  const recentGrowth = median(yoy.slice(-3), 0.05);
  return MONTHS.map((month) => {
    const priorYearSales = monthly.get(`${forecastYear - 1}-${month}`) || latestSameMonth(data.indexRows, "revenue", month, 0);
    return {
      month,
      period: MONTH_LABELS[month - 1],
      salesForecast: priorYearSales * (1 + recentGrowth),
      status: `Prior year x ${percentFormat.format(recentGrowth)} growth`
    };
  });
}

function renderSalesInputs() {
  const rows = state.salesForecast;
  elements.salesInputTable.innerHTML = `
    <thead><tr><th>Month</th><th class="number">Sales Forecast (P)</th><th>狀態</th></tr></thead>
    <tbody>
      ${rows.map((row) => `
        <tr>
          <td>${escapeHtml(row.period)}</td>
          <td class="number"><input type="number" min="0" step="1000" data-sales-month="${row.month}" value="${Math.round(row.salesForecast || 0)}" /></td>
          <td>${escapeHtml(row.status || "Manual input")}</td>
        </tr>
      `).join("")}
    </tbody>`;
  elements.salesInputTable.querySelectorAll("input[data-sales-month]").forEach((input) => {
    input.addEventListener("input", () => {
      const month = Number(input.dataset.salesMonth);
      const target = state.salesForecast.find((row) => row.month === month);
      target.salesForecast = toNumber(input.value, 0);
      target.status = "Manual input";
    });
  });
}

function getAssumptions() {
  return {
    openingCash: toNumber(document.getElementById("openingCash").value, 0),
    cashFloor: toNumber(document.getElementById("cashFloor").value, -4000000),
    maxDelay: toNumber(document.getElementById("maxDelay").value, 4000000),
    salesCollection: toNumber(document.getElementById("salesCollection").value, 0.55),
    cashPaymentRate: toNumber(document.getElementById("cashPaymentRate").value, 0.55),
    creditPaymentRate: Math.max(0, 1 - toNumber(document.getElementById("cashPaymentRate").value, 0.55)),
    sameMonthPayment: toNumber(document.getElementById("sameMonthPayment").value, 0.85),
    ccLimit: toNumber(document.getElementById("ccLimit").value, 5000000),
    packagingRate: toNumber(document.getElementById("packagingRate").value, 0.015),
    fbaFeeRate: toNumber(document.getElementById("fbaFeeRate").value, 0.21),
    platformFeeRate: toNumber(document.getElementById("platformFeeRate").value, 0.14),
    advertisingRate: toNumber(document.getElementById("advertisingRate").value, 0.04),
    inboundCostRate: toNumber(document.getElementById("inboundCostRate").value, 0.02),
    refundFeeRate: toNumber(document.getElementById("refundFeeRate").value, 0.05),
    inventoryLostRate: toNumber(document.getElementById("inventoryLostRate").value, 0.077),
    normalStorageRate: toNumber(document.getElementById("normalStorageRate").value, 0.01),
    q4StorageRate: toNumber(document.getElementById("q4StorageRate").value, 0.035),
    leadTimeDays: toNumber(document.getElementById("leadTimeDays").value, 45),
    purchaseRounding: toNumber(document.getElementById("purchaseRounding").value, 100000),
    invoiceToEta: 0.874,
    landedCostRate: 0.02,
    unmodeledOpexRate: 0.03,
    sellableReturnRate: 0.015,
    shrinkageRate: 0.015
  };
}

function buildDrivers(data) {
  const weightedCogsRate = sum(data.indexRows.map((row) => row.cogs || 0)) / Math.max(1, sum(data.indexRows.map((row) => row.cogs > 0 ? row.revenue : 0)));
  const fallbackRatio = median(data.indexRows.map((row) => row.revenueInventoryRatio), 0.75);
  return state.salesForecast.map((forecast) => {
    const cogsRate = blendedSameMonth(data.indexRows, "cogsRate", forecast.month, weightedCogsRate || 0.43);
    const revenueInventoryRatio = blendedSameMonth(data.indexRows, "revenueInventoryRatio", forecast.month, fallbackRatio);
    const historicalInventory = latestSameMonth(data.indexRows.filter((row) => row.year < 2026), "inventory", forecast.month, NaN);
    const historicalPurchase = latestSameMonth(data.indexRows.filter((row) => row.year < 2026), "purchasePlan", forecast.month, NaN);
    const priorYearSales = latestSameMonth(data.indexRows.filter((row) => row.year < 2026), "revenue", forecast.month, NaN);
    return {
      year: Number(forecast.period.slice(0, 4)),
      month: forecast.month,
      period: forecast.period,
      salesForecast: forecast.salesForecast,
      salesYoyGrowth: Number.isFinite(priorYearSales) && priorYearSales > 0
        ? forecast.salesForecast / priorYearSales - 1
        : null,
      cogsRate,
      cogsDemand: forecast.salesForecast * cogsRate,
      revenueInventoryRatio,
      historicalInventory,
      historicalPurchase
    };
  });
}

function extendLegacyDriversToJune2027(drivers, data) {
  const annualTotals = new Map();
  data.indexRows.forEach((row) => {
    if (row.revenue > 0) annualTotals.set(row.year, (annualTotals.get(row.year) || 0) + row.revenue);
  });
  const years = [...annualTotals.keys()].sort((a, b) => a - b);
  const latestYear = years[years.length - 1];
  const priorYear = years[years.length - 2];
  const growth = priorYear && annualTotals.get(priorYear) > 0
    ? Math.min(Math.max(annualTotals.get(latestYear) / annualTotals.get(priorYear) - 1, -0.1), 0.2)
    : 0.05;
  const extended = [...drivers];
  drivers.slice(0, 6).forEach((driver, index) => {
    const latestSameMonth = data.indexRows
      .filter((row) => row.month === index + 1 && row.revenue > 0)
      .sort((a, b) => b.year - a.year);
    const monthlyGrowth = latestSameMonth.length >= 2 && latestSameMonth[1].revenue > 0
      ? latestSameMonth[0].revenue / latestSameMonth[1].revenue - 1
      : growth;
    const projectedGrowth = Math.min(
      Math.max(growth * 0.65 + monthlyGrowth * 0.35, -0.1),
      0.2
    );
    const salesForecast = driver.salesForecast * (1 + projectedGrowth);
    extended.push({
      ...driver,
      year: 2027,
      month: index + 1,
      period: `2027-${String(index + 1).padStart(2, "0")}`,
      salesForecast,
      salesYoyGrowth: projectedGrowth,
      cogsDemand: salesForecast * driver.cogsRate,
      historicalInventory: null,
      historicalPurchase: null
    });
  });
  return extended;
}

function estimateOpeningInventory(data) {
  const valid = data.indexRows.filter((row) => Number.isFinite(row.inventory) && row.inventory > 0).sort((a, b) => a.year - b.year || a.month - b.month);
  if (!valid.length) return 0;
  let last = valid[valid.length - 1];
  let inventory = last.inventory;
  let year = last.year;
  let month = last.month + 1;
  if (month === 13) { year += 1; month = 1; }
  while (year < 2026 || (year === 2026 && month < 1)) {
    const row = data.indexRows.find((item) => item.year === year && item.month === month);
    const revenue = row?.revenue || latestSameMonth(data.indexRows, "revenue", month, 0);
    const cogsRate = blendedSameMonth(data.indexRows, "cogsRate", month, 0.43);
    const ratio = blendedSameMonth(data.indexRows, "revenueInventoryRatio", month, 0.75);
    const cogs = revenue * cogsRate;
    const need = ratio > 0 ? revenue / ratio : inventory;
    const purchase = ceilToRounding(need + cogs - inventory, 100000);
    inventory = inventory + purchase - cogs;
    month += 1;
    if (month === 13) { year += 1; month = 1; }
  }
  return inventory;
}

function scenarioSettings(base, scenario) {
  const settings = { ...base };
  if (scenario === "Conservative") {
    settings.buffer = 0.15;
    settings.coverage = [60,60,60,60,60,60,60,60,70,60,50,40];
    settings.storageRateMultiplier = 0.85;
  } else if (scenario === "Peak-Safe") {
    settings.buffer = 0.25;
    settings.coverage = [90,90,90,90,90,90,90,90,105,90,75,60];
    settings.storageRateMultiplier = 1.15;
  } else {
    settings.buffer = 0.20;
    settings.coverage = [75,75,75,75,75,75,75,75,90,75,60,45];
    settings.storageRateMultiplier = 1.0;
  }
  return settings;
}

function simulateScenario(name, data, drivers, openingInventory, baseAssumptions) {
  const a = scenarioSettings(baseAssumptions, name);
  let inventory = openingInventory;
  let cash = a.openingCash;
  let cumulativeDelay = 0;
  let ccBalance = 0;
  return drivers.map((driver, index) => {
    const future = drivers.slice(index, Math.min(index + 3, drivers.length));
    const futureDays = sum(future.map((row) => daysInMonth(row.year || 2026, row.month)));
    const forwardDailyCogs = sum(future.map((row) => row.cogsDemand)) / Math.max(1, futureDays);
    const safetyStock = forwardDailyCogs * a.leadTimeDays * a.buffer;
    const targetCoverageDays = a.coverage[index % 12];
    const targetInventory = forwardDailyCogs * targetCoverageDays + safetyStock;
    const sellableReturn = driver.cogsDemand * a.sellableReturnRate;
    const shrinkage = driver.cogsDemand * a.shrinkageRate;
    const recommendedPurchaseEta = ceilToRounding(targetInventory + driver.cogsDemand + shrinkage - sellableReturn - inventory, a.purchaseRounding);
    const recommendedInvoice = recommendedPurchaseEta * a.invoiceToEta;
    const endingInventory = inventory + recommendedPurchaseEta - driver.cogsDemand - shrinkage + sellableReturn;
    const coverageDays = forwardDailyCogs > 0 ? endingInventory / forwardDailyCogs : 0;
    const storageRate = (driver.month >= 10 ? a.q4StorageRate : a.normalStorageRate) * a.storageRateMultiplier;
    const averageInventory = (inventory + endingInventory) / 2;
    const storageCost = averageInventory * storageRate;
    const packagingFee = recommendedPurchaseEta * a.packagingRate;
    const landedCost = recommendedPurchaseEta * a.landedCostRate;
    const unmodeledOpex = driver.salesForecast * a.unmodeledOpexRate;
    const salesCashIn = driver.salesForecast * a.salesCollection;
    const inventoryCashPayment = recommendedInvoice * a.cashPaymentRate * a.sameMonthPayment;
    const creditCardCharge = recommendedInvoice * a.creditPaymentRate;
    ccBalance += creditCardCharge;
    const cashBeforeDelay = cash + salesCashIn - inventoryCashPayment - packagingFee - landedCost - storageCost - unmodeledOpex;
    const delayNeeded = Math.max(0, a.cashFloor - cashBeforeDelay);
    const availableDelay = Math.max(0, a.maxDelay - cumulativeDelay);
    const delayedPaymentUsed = Math.min(delayNeeded, availableDelay);
    const endingCash = cashBeforeDelay + delayedPaymentUsed;
    cumulativeDelay += delayedPaymentUsed;
    const inventoryYoyGrowth = Number.isFinite(driver.historicalInventory) && driver.historicalInventory > 0 ? endingInventory / driver.historicalInventory - 1 : null;
    const purchaseVsHistory = Number.isFinite(driver.historicalPurchase) && driver.historicalPurchase > 0 ? recommendedPurchaseEta / driver.historicalPurchase - 1 : null;
    const row = {
      scenario: name,
      period: driver.period,
      salesForecast: driver.salesForecast,
      salesYoyGrowth: driver.salesYoyGrowth,
      cogsDemand: driver.cogsDemand,
      openingInventory: inventory,
      targetInventory,
      targetCoverageDays,
      safetyStock,
      recommendedPurchaseEta,
      recommendedInvoice,
      endingInventory,
      coverageDays,
      inventoryYoyGrowth,
      purchaseVsHistory,
      packagingFee,
      storageCost,
      landedCost,
      salesCashIn,
      inventoryCashPayment,
      creditCardCharge,
      estimatedCreditCardBalance: ccBalance,
      cashBeforeDelay,
      delayedPaymentUsed,
      endingCash,
      cumulativeDelay,
      inventoryFlag: endingInventory >= targetInventory ? "OK" : "Below target",
      cashFlag: endingCash >= a.cashFloor ? "OK" : "Cash pressure",
      ccFlag: ccBalance <= a.ccLimit ? "OK" : "Over CC limit",
      storageFlag: driver.month >= 10 && storageCost > driver.salesForecast * 0.06 ? "Q4 storage high" : "OK"
    };
    inventory = endingInventory;
    cash = endingCash;
    return row;
  });
}

function compareScenarios(scenarios) {
  return Object.entries(scenarios).map(([name, rows]) => ({
    scenario: name,
    fySalesForecast: sum(rows.map((row) => row.salesForecast)),
    fyCogsDemand: sum(rows.map((row) => row.cogsDemand)),
    fyRecommendedPurchaseEta: sum(rows.map((row) => row.recommendedPurchaseEta)),
    fyPackagingFee: sum(rows.map((row) => row.packagingFee)),
    fyStorageCost: sum(rows.map((row) => row.storageCost)),
    q4StorageCost: sum(rows.filter((row) => row.period >= "2026-10" && row.period <= "2026-12").map((row) => row.storageCost)),
    decEndingInventory: rows[11]?.endingInventory || 0,
    lowestEndingCash: Math.min(...rows.map((row) => row.endingCash)),
    maxCumulativeDelay: Math.max(...rows.map((row) => row.cumulativeDelay)),
    maxCreditCardBalance: Math.max(...rows.map((row) => row.estimatedCreditCardBalance)),
    riskMonths: rows.filter((row) => row.cashFlag !== "OK" || row.ccFlag !== "OK" || row.storageFlag !== "OK").map((row) => row.period).join(", ") || "-"
  }));
}

function formatCell(value, key = "") {
  if (value === null || value === undefined || value === "N/M") return "N/M";
  if (key.toLowerCase().includes("flag")) {
    const isOk = value === "OK";
    const isRisk = String(value).includes("Cash") || String(value).includes("Over") || String(value).includes("Below");
    return `<span class="badge ${isOk ? "ok" : isRisk ? "risk" : "warn"}">${escapeHtml(value)}</span>`;
  }
  if (typeof value === "number") {
    if (key.toLowerCase().includes("growth") || key.toLowerCase().includes("yoy") || key.toLowerCase().includes("vs") || key.toLowerCase().includes("ratio") || key.toLowerCase().includes("rate")) {
      return Number.isFinite(value) ? percentFormat.format(value) : "-";
    }
    return numberFormat.format(value);
  }
  return escapeHtml(value ?? "-");
}

function buildTable(table, rows, columns) {
  table.innerHTML = `
    <thead><tr>${columns.map((column) => `<th class="${column.number ? "number" : ""}">${escapeHtml(column.label)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${columns.map((column) => `<td class="${column.number ? "number" : ""}">${formatCell(row[column.key], column.key)}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

function renderKpis(baseRows, comparison) {
  const base = comparison.find((row) => row.scenario === "Base");
  const risk = base.lowestEndingCash < getAssumptions().cashFloor || base.maxCreditCardBalance > getAssumptions().ccLimit;
  elements.heroPurchase.textContent = numberFormat.format(base.fyRecommendedPurchaseEta);
  elements.kpiGrid.innerHTML = [
    ["FY 建議買貨 ETA (P)", base.fyRecommendedPurchaseEta, ""],
    ["Q4 庫存成本 (P)", base.q4StorageCost, base.riskMonths.includes("2026-10") ? "is-risk" : ""],
    ["12 月期末庫存 (P)", base.decEndingInventory, ""],
    ["最低期末現金 (P)", base.lowestEndingCash, risk ? "is-risk" : "is-ok"],
    ["最大信用卡餘額 (P)", base.maxCreditCardBalance, base.maxCreditCardBalance > getAssumptions().ccLimit ? "is-risk" : ""],
    ["可延後付款使用 (P)", base.maxCumulativeDelay, base.maxCumulativeDelay > 0 ? "is-risk" : "is-ok"]
  ].map(([label, value, klass]) => `<div class="kpi-card ${klass}"><span>${escapeHtml(label)}</span><strong>${numberFormat.format(value)}</strong></div>`).join("");
}

function renderLineChart(svg, rows, primaryKey, secondaryKey = null, riskLine = null) {
  const width = 900;
  const height = 320;
  const padding = { top: 20, right: 24, bottom: 42, left: 74 };
  const values = rows.flatMap((row) => [row[primaryKey], secondaryKey ? row[secondaryKey] : null, riskLine]).filter((value) => Number.isFinite(value));
  const minValue = Math.min(0, ...values);
  const maxValue = Math.max(...values, 1);
  const span = maxValue - minValue || 1;
  const xFor = (index) => padding.left + (index * (width - padding.left - padding.right)) / Math.max(rows.length - 1, 1);
  const yFor = (value) => height - padding.bottom - ((value - minValue) / span) * (height - padding.top - padding.bottom);
  const makePath = (key) => rows.map((row, index) => `${index === 0 ? "M" : "L"} ${xFor(index).toFixed(2)} ${yFor(row[key]).toFixed(2)}`).join(" ");
  const ticks = Array.from({ length: 4 }, (_, index) => minValue + (span * index) / 3);
  const grid = ticks.map((tick) => `<line class="chart-axis" x1="${padding.left}" y1="${yFor(tick)}" x2="${width - padding.right}" y2="${yFor(tick)}"></line><text class="chart-label" x="8" y="${yFor(tick) + 4}">${numberFormat.format(tick)}</text>`).join("");
  const xLabels = rows.map((row, index) => `<text class="chart-label" x="${xFor(index)}" y="${height - 12}" text-anchor="middle">${row.period.slice(5)}</text>`).join("");
  const riskMarkup = Number.isFinite(riskLine) ? `<path class="chart-line cash-risk" d="M ${padding.left} ${yFor(riskLine)} L ${width - padding.right} ${yFor(riskLine)}"></path>` : "";
  svg.innerHTML = `${grid}<line class="chart-axis" x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}"></line>${riskMarkup}<path class="chart-line" d="${makePath(primaryKey)}"></path>${secondaryKey ? `<path class="chart-line secondary" d="${makePath(secondaryKey)}"></path>` : ""}${xLabels}`;
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function rowsToCsv(rows) {
  if (!rows.length) return "";
  const keys = Object.keys(rows[0]);
  return [keys.join(","), ...rows.map((row) => keys.map((key) => csvEscape(row[key])).join(","))].join("\n");
}

function renderDiagnostics(data) {
  const diagnostics = [];
  const hasHalfYearGap = data.indexRows.some((row) => row.year === 2025 && row.month >= 7 && !Number.isFinite(row.inventory));
  if (hasHalfYearGap) diagnostics.push(["2025 下半年缺 Inventory / COGS", "模型已用歷史同月份比率橋接，但實際期初庫存若不同會影響採購量。"]);
  diagnostics.push(["缺少已下單 / 在途庫存", "若已有 PO 或 inbound ETA，建議加入，否則模型會把補貨需求全算成新採購。"]);
  diagnostics.push(["現金假設需校準", "opening cash、Amazon payout lag、供應商付款條件會直接改變 Cash Pressure 燈號。"]);
  diagnostics.push(["Q4 storage rate 是假設", "目前 10–12 月用較高庫存費率壓測，應替換成實際 FBA / 3PL 費率。"]);
  elements.diagnosticList.innerHTML = diagnostics.map(([title, body]) => `<div class="diagnostic-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>`).join("");
}

function extendFinanceToJune2027(finance, assumptions) {
  const annualSalesGrowth = Math.min(
    Math.max(sum(finance.sales) / Math.max(1, sum(finance.y25Sales)) - 1, -0.1),
    0.2
  );
  const cashBackRate = sum(finance.amazonCashBack) / Math.max(1, sum(finance.sales));
  const extended = {};
  const monthlyKeys = [
    "sales", "cogs", "grossProfit", "y25Sales", "y25NetIncome", "netIncome",
    "existingPurchaseEta", "existingInvoiceReceived", "inventoryFound", "inventoryLost",
    "inventoryLostReversal", "shipping", "tariff", "prep", "storage", "ltsf", "labor",
    "advertising", "taxes", "legal", "dues", "otherExpenses", "amazonCashBack",
    "bsCash", "bsInventory", "bsInTransit", "bsAp", "bsCc", "apCashPayment",
    "apCcPayment", "ccBalance", "ccPayment"
  ];
  monthlyKeys.forEach((key) => {
    extended[key] = [...(finance[key] || [])];
  });

  for (let monthIndex = 0; monthIndex < 6; monthIndex += 1) {
    const sales2026 = finance.sales[monthIndex];
    const monthlySalesGrowth = finance.y25Sales[monthIndex] > 0
      ? sales2026 / finance.y25Sales[monthIndex] - 1
      : annualSalesGrowth;
    const projectedSalesGrowth = Math.min(
      Math.max(annualSalesGrowth * 0.65 + monthlySalesGrowth * 0.35, -0.1),
      0.2
    );
    const sales2027 = sales2026 * (1 + projectedSalesGrowth);
    const cogsRate = finance.cogs[monthIndex] / Math.max(1, sales2026);
    const netMargin = finance.netIncome[monthIndex] / Math.max(1, sales2026);
    const grossMargin = finance.grossProfit[monthIndex] / Math.max(1, sales2026);

    extended.sales.push(sales2027);
    extended.cogs.push(sales2027 * cogsRate);
    extended.grossProfit.push(sales2027 * grossMargin);
    extended.y25Sales.push(sales2026);
    extended.y25NetIncome.push(finance.netIncome[monthIndex]);
    extended.netIncome.push(sales2027 * netMargin);
    extended.existingPurchaseEta.push(0);
    extended.existingInvoiceReceived.push(0);
    extended.inventoryFound.push(0);
    extended.inventoryLost.push(sales2027 * cogsRate * assumptions.inventoryLostRate);
    extended.inventoryLostReversal.push(0);
    extended.shipping.push(finance.shipping[monthIndex] * (1 + annualSalesGrowth));
    extended.tariff.push(finance.tariff[monthIndex] * (1 + annualSalesGrowth));
    extended.prep.push(finance.prep[monthIndex] * (1 + annualSalesGrowth));
    extended.storage.push(finance.storage[monthIndex] * (1 + annualSalesGrowth));
    extended.ltsf.push(finance.ltsf[monthIndex] * (1 + annualSalesGrowth));
    extended.labor.push(finance.labor[monthIndex] * (1 + annualSalesGrowth));
    extended.advertising.push(sales2027 * assumptions.advertisingRate);
    extended.taxes.push(finance.taxes[monthIndex] * (1 + annualSalesGrowth));
    extended.legal.push(finance.legal[monthIndex] * (1 + annualSalesGrowth));
    extended.dues.push(finance.dues[monthIndex] * (1 + annualSalesGrowth));
    extended.otherExpenses.push(finance.otherExpenses[monthIndex] * (1 + annualSalesGrowth));
    extended.amazonCashBack.push(sales2027 * cashBackRate);
    extended.bsCash.push(null);
    extended.bsInventory.push(null);
    extended.bsInTransit.push(null);
    extended.bsAp.push(null);
    extended.bsCc.push(null);
    extended.apCashPayment.push(0);
    extended.apCcPayment.push(0);
    extended.ccBalance.push(null);
    extended.ccPayment.push(0);
  }

  return { ...finance, ...extended, annualSalesGrowth };
}

function runEnhancedForecast() {
  const assumptions = getAssumptions();
  const finance = extendFinanceToJune2027(state.financeData, assumptions);
  const invoiceToEta = sum(finance.existingInvoiceReceived) / Math.max(1, sum(finance.existingPurchaseEta));
  const coverage = [75, 75, 75, 75, 75, 75, 75, 75, 90, 75, 60, 45, 75, 75, 75, 75, 75, 75];
  let inventory = finance.openingInventory;
  let cash = finance.openingCash;
  let cumulativeDelay = 0;
  let previousEstimatedCreditCardBalance = 0;
  const rows = EXTENDED_PERIODS.map((period, index) => {
    const year = Number(period.slice(0, 4));
    const month = Number(period.slice(5, 7));
    const future = finance.cogs.slice(index, Math.min(index + 3, EXTENDED_PERIODS.length));
    const futurePeriods = EXTENDED_PERIODS.slice(index, Math.min(index + 3, EXTENDED_PERIODS.length));
    const futureDays = futurePeriods.reduce((total, futurePeriod) => {
      return total + daysInMonth(Number(futurePeriod.slice(0, 4)), Number(futurePeriod.slice(5, 7)));
    }, 0);
    const forwardDailyCogs = sum(future) / Math.max(1, futureDays);
    const safetyStock = forwardDailyCogs * assumptions.leadTimeDays * 0.2;
    const targetInventory = forwardDailyCogs * coverage[index] + safetyStock;
    const salesYoyGrowth = finance.y25Sales[index] > 0 ? finance.sales[index] / finance.y25Sales[index] - 1 : null;
    const netProfit2025 = finance.y25NetIncome[index];
    const netProfit2026 = finance.netIncome[index];
    const netProfitYoyPct = Math.abs(netProfit2025) >= 100000
      ? (netProfit2026 - netProfit2025) / Math.abs(netProfit2025)
      : "N/M";
    const fbaFee = finance.sales[index] * assumptions.fbaFeeRate;
    const platformFee = finance.sales[index] * assumptions.platformFeeRate;
    const advertisingCost = finance.sales[index] * assumptions.advertisingRate;
    const refundFee = finance.sales[index] * assumptions.refundFeeRate;
    const inventoryLostAmount = finance.cogs[index] * assumptions.inventoryLostRate;
    const returnAddback = Math.max(0, finance.inventoryFound[index] + finance.inventoryLostReversal[index]);
    const shrinkageNet = Math.max(0, inventoryLostAmount - finance.inventoryFound[index] - finance.inventoryLostReversal[index]);
    const modeledConsumption = finance.cogs[index] + shrinkageNet - returnAddback;
    const existingPurchaseEta = finance.existingPurchaseEta[index];
    const optimizedPurchaseEta = ceilToRounding(targetInventory + modeledConsumption - inventory, assumptions.purchaseRounding);
    const purchaseDelta = optimizedPurchaseEta - existingPurchaseEta;
    const optimizedInvoice = optimizedPurchaseEta * invoiceToEta;
    const invoiceDelta = optimizedInvoice - finance.existingInvoiceReceived[index];
    const endingInventory = inventory + optimizedPurchaseEta - modeledConsumption;
    const coverageDays = forwardDailyCogs > 0 ? endingInventory / forwardDailyCogs : 0;
    const storageLtsf = finance.storage[index] + finance.ltsf[index];
    const inboundCost = optimizedPurchaseEta * assumptions.inboundCostRate;
    const packagingFee = optimizedPurchaseEta * assumptions.packagingRate;
    const landedCost = inboundCost + finance.shipping[index] + finance.tariff[index] + packagingFee;
    const operatingCost = finance.labor[index] + advertisingCost + fbaFee + platformFee + refundFee + finance.taxes[index] + finance.legal[index] + finance.dues[index] + finance.otherExpenses[index];
    const paymentDeltaCash = invoiceDelta * assumptions.cashPaymentRate * assumptions.sameMonthPayment;
    const extraCcCharge = invoiceDelta * Math.max(0, 1 - assumptions.cashPaymentRate);
    const cashBeforeDelay = cash + finance.amazonCashBack[index] - finance.apCashPayment[index] - paymentDeltaCash - storageLtsf - landedCost - operatingCost;
    const delayNeeded = Math.max(0, assumptions.cashFloor - cashBeforeDelay);
    const availableDelay = Math.max(0, assumptions.maxDelay - cumulativeDelay);
    const delayedPaymentUsed = Math.min(delayNeeded, availableDelay);
    const endingCash = cashBeforeDelay + delayedPaymentUsed;
    cumulativeDelay += delayedPaymentUsed;
    const hasFinanceCreditCardBalance = Number.isFinite(finance.ccBalance[index]);
    const estimatedCreditCardBalance = hasFinanceCreditCardBalance
      ? Math.max(0, finance.ccBalance[index] + extraCcCharge)
      : Math.max(0, previousEstimatedCreditCardBalance + extraCcCharge - (finance.ccPayment[index] || 0));
    const row = {
      period,
      forecastYear: year,
      salesForecast: finance.sales[index],
      salesYoyGrowth,
      netProfit2025,
      netProfit2026,
      netProfitYoyPct,
      cogsDemand: finance.cogs[index],
      existingPurchaseEta,
      suggestedInventoryPurchaseQty: optimizedPurchaseEta,
      recommendedPurchaseEta: optimizedPurchaseEta,
      purchaseDelta,
      openingInventory: inventory,
      targetInventory,
      endingInventory,
      financeBsInventory: finance.bsInventory[index],
      modelVsFinanceInventory: Number.isFinite(finance.bsInventory[index]) ? endingInventory - finance.bsInventory[index] : null,
      coverageDays,
      storageCost: storageLtsf,
      inboundCost,
      refundFee,
      fbaFee,
      platformFee,
      advertisingCost,
      inventoryLostAmount,
      inventoryLostRatio: assumptions.inventoryLostRate,
      packagingFee,
      endingCash,
      financeBsCash: finance.bsCash[index],
      estimatedCreditCardBalance,
      cumulativeDelay,
      inventoryFlag: endingInventory >= targetInventory ? "OK" : "Below target",
      cashFlag: endingCash >= assumptions.cashFloor ? "OK" : "Cash pressure",
      ccFlag: estimatedCreditCardBalance <= assumptions.ccLimit ? "OK" : "Over CC limit",
      storageFlag: month >= 10 && storageLtsf > finance.sales[index] * 0.05 ? "Q4 storage high" : "OK"
    };
    inventory = endingInventory;
    cash = endingCash;
    previousEstimatedCreditCardBalance = estimatedCreditCardBalance;
    return row;
  });

  const comparison = [{
    scenario: "Enhanced Base",
    fySalesForecast: sum(rows.map((row) => row.salesForecast)),
    fyCogsDemand: sum(rows.map((row) => row.cogsDemand)),
    fyRecommendedPurchaseEta: sum(rows.map((row) => row.recommendedPurchaseEta)),
    fyExistingPurchaseEta: sum(rows.map((row) => row.existingPurchaseEta)),
    fyPurchaseDelta: sum(rows.map((row) => row.purchaseDelta)),
    fyFbaFee: sum(rows.map((row) => row.fbaFee)),
    fyPlatformFee: sum(rows.map((row) => row.platformFee)),
    fyAdvertisingCost: sum(rows.map((row) => row.advertisingCost)),
    fyInboundCost: sum(rows.map((row) => row.inboundCost)),
    fyRefundFee: sum(rows.map((row) => row.refundFee)),
    fyInventoryLostAmount: sum(rows.map((row) => row.inventoryLostAmount)),
    fyStorageCost: sum(rows.map((row) => row.storageCost)),
    q4StorageCost: sum(rows.filter((row) => row.period >= "2026-10" && row.period <= "2026-12").map((row) => row.storageCost)),
    finalEndingInventory: rows[rows.length - 1]?.endingInventory || 0,
    lowestEndingCash: Math.min(...rows.map((row) => row.endingCash)),
    maxCumulativeDelay: Math.max(...rows.map((row) => row.cumulativeDelay)),
    maxCreditCardBalance: Math.max(...rows.map((row) => row.estimatedCreditCardBalance)),
    riskMonths: rows.filter((row) => row.cashFlag !== "OK" || row.ccFlag !== "OK" || row.storageFlag !== "OK").map((row) => row.period).join(", ") || "-"
  }];

  state.lastBaseRows = rows;
  state.lastBaseCsv = rowsToCsv(rows);
  elements.downloadCsvButton.disabled = false;
  elements.heroPurchase.textContent = numberFormat.format(comparison[0].fyRecommendedPurchaseEta);
  elements.kpiGrid.innerHTML = [
    ["Finance 既有買貨 ETA（2026）", comparison[0].fyExistingPurchaseEta, ""],
    ["18M 模型建議買貨 ETA (P)", comparison[0].fyRecommendedPurchaseEta, ""],
    ["差異 vs 既有計畫 (P)", comparison[0].fyPurchaseDelta, comparison[0].fyPurchaseDelta < 0 ? "is-ok" : "is-risk"],
    ["FBA fee (P)", comparison[0].fyFbaFee, ""],
    ["Platform fee (P)", comparison[0].fyPlatformFee, ""],
    ["Inbound cost (P)", comparison[0].fyInboundCost, ""],
    ["2026 Q4 庫存成本 (P)", comparison[0].q4StorageCost, ""],
    ["2027-06 期末庫存 (P)", comparison[0].finalEndingInventory, ""],
    ["最低期末現金 (P)", comparison[0].lowestEndingCash, comparison[0].lowestEndingCash < assumptions.cashFloor ? "is-risk" : "is-ok"]
  ].map(([label, value, klass]) => `<div class="kpi-card ${klass}"><span>${escapeHtml(label)}</span><strong>${numberFormat.format(value)}</strong></div>`).join("");

  buildTable(elements.scenarioTable, comparison, [
    { key: "scenario", label: "Model" },
    { key: "fyExistingPurchaseEta", label: "既有 ETA（2026）", number: true },
    { key: "fyRecommendedPurchaseEta", label: "18M 建議 ETA (P)", number: true },
    { key: "fyPurchaseDelta", label: "差異 (P)", number: true },
    { key: "fyFbaFee", label: "FBA fee (P)", number: true },
    { key: "fyPlatformFee", label: "Platform fee (P)", number: true },
    { key: "fyAdvertisingCost", label: "廣告 (P)", number: true },
    { key: "fyInboundCost", label: "Inbound (P)", number: true },
    { key: "fyRefundFee", label: "Refund (P)", number: true },
    { key: "fyInventoryLostAmount", label: "Inventory Lost (P)", number: true },
    { key: "fyStorageCost", label: "庫存成本 (P)", number: true },
    { key: "q4StorageCost", label: "2026 Q4 庫存成本 (P)", number: true },
    { key: "lowestEndingCash", label: "最低現金 (P)", number: true },
    { key: "maxCreditCardBalance", label: "最大 CC (P)", number: true },
    { key: "riskMonths", label: "風險月份 (P)" }
  ]);
  buildTable(elements.detailTable, rows, [
    { key: "period", label: "Month" },
    { key: "salesForecast", label: "Sales Forecast (P)", number: true },
    { key: "salesYoyGrowth", label: "Sales YoY (P)", number: true },
    { key: "netProfit2025", label: "Prior-Year Net Profit", number: true },
    { key: "netProfit2026", label: "Net Profit (P)", number: true },
    { key: "netProfitYoyPct", label: "Net Profit YoY (P)", number: true },
    { key: "cogsDemand", label: "COGS Forecast (P)", number: true },
    { key: "existingPurchaseEta", label: "既有 ETA", number: true },
    { key: "suggestedInventoryPurchaseQty", label: "建議買存貨數量 (P)", number: true },
    { key: "recommendedPurchaseEta", label: "建議 ETA (P)", number: true },
    { key: "purchaseDelta", label: "差異 (P)", number: true },
    { key: "inboundCost", label: "Inbound Cost (P)", number: true },
    { key: "refundFee", label: "Refund Fee (P)", number: true },
    { key: "fbaFee", label: "FBA Fee (P)", number: true },
    { key: "platformFee", label: "Platform Fee (P)", number: true },
    { key: "advertisingCost", label: "廣告 (P)", number: true },
    { key: "inventoryLostAmount", label: "Inventory Lost (P)", number: true },
    { key: "inventoryLostRatio", label: "Inventory Lost Ratio (P)", number: true },
    { key: "endingInventory", label: "模型庫存 (P)", number: true },
    { key: "financeBsInventory", label: "Finance BS 庫存", number: true },
    { key: "coverageDays", label: "覆蓋天數 (P)", number: true },
    { key: "storageCost", label: "Storage+LTSF (P)", number: true },
    { key: "endingCash", label: "期末現金 (P)", number: true },
    { key: "inventoryFlag", label: "庫存 (P)" },
    { key: "cashFlag", label: "現金 (P)" },
    { key: "ccFlag", label: "信用卡 (P)" },
    { key: "storageFlag", label: "庫存費 (P)" }
  ]);

  const nextYearRows = rows.filter((row) => row.period >= "2027-01");
  elements.nextYearKpiGrid.innerHTML = [
    ["2027 H1 Sales (P)", sum(nextYearRows.map((row) => row.salesForecast))],
    ["2027 H1 建議採購 (P)", sum(nextYearRows.map((row) => row.recommendedPurchaseEta))],
    ["2027-06 期末庫存 (P)", nextYearRows[nextYearRows.length - 1]?.endingInventory || 0],
    ["2027 H1 最低現金 (P)", Math.min(...nextYearRows.map((row) => row.endingCash))]
  ].map(([label, value]) => `<div class="kpi-card"><span>${escapeHtml(label)}</span><strong>${numberFormat.format(value)}</strong></div>`).join("");
  buildTable(elements.nextYearTable, nextYearRows, [
    { key: "period", label: "Month" },
    { key: "salesForecast", label: "Sales Forecast (P)", number: true },
    { key: "salesYoyGrowth", label: "Sales YoY (P)", number: true },
    { key: "cogsDemand", label: "COGS Forecast (P)", number: true },
    { key: "suggestedInventoryPurchaseQty", label: "建議買存貨數量 (P)", number: true },
    { key: "endingInventory", label: "期末庫存 (P)", number: true },
    { key: "coverageDays", label: "覆蓋天數 (P)", number: true },
    { key: "inboundCost", label: "Inbound Cost (P)", number: true },
    { key: "refundFee", label: "Refund Fee (P)", number: true },
    { key: "fbaFee", label: "FBA Fee (P)", number: true },
    { key: "platformFee", label: "Platform Fee (P)", number: true },
    { key: "advertisingCost", label: "廣告 (P)", number: true },
    { key: "endingCash", label: "期末現金 (P)", number: true },
    { key: "cashFlag", label: "現金 (P)" },
    { key: "ccFlag", label: "信用卡 (P)" }
  ]);
  renderLineChart(elements.inventoryChart, rows, "endingInventory", "recommendedPurchaseEta");
  renderLineChart(elements.cashChart, rows, "endingCash", null, assumptions.cashFloor);
  elements.diagnosticList.innerHTML = [
    ["雙檔模式", `已使用 ${state.workbookData?.sourceName || "Sales 檔"} 與 ${finance.sourceName}`],
    ["模型類型", "Base-stock replenishment with rolling 3-month COGS demand and cash constraint overlay."],
    ["注意", "若 existing purchase ETA 中有已承諾 PO，差異欄應解讀為可延後/可重排空間，不是直接砍單。"]
  ].map(([title, body]) => `<div class="diagnostic-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>`).join("");
  elements.summaryPanel.classList.remove("hidden");
  elements.detailPanel.classList.remove("hidden");
  elements.nextYearPanel.classList.remove("hidden");
  elements.diagnosticPanel.classList.remove("hidden");
  showMessage("success", "18 個月精確模型完成", [
    `Finance 檔：${finance.sourceName}`,
    `預測期間：2026-01 至 2027-06`,
    `18 個月建議 ETA：${numberFormat.format(comparison[0].fyRecommendedPurchaseEta)}`
  ]);
}

function runForecast() {
  if (state.financeData) {
    runEnhancedForecast();
    return;
  }
  if (!state.workbookData) {
    showMessage("warning", "尚未讀取 workbook", ["已自動使用範例資料試算。若要用公司數據，請先上傳 Excel。"]);
    state.workbookData = buildDemoData();
  }
  const hasSales = state.salesForecast.some((row) => row.salesForecast > 0);
  if (!hasSales) state.salesForecast = generateDefaultSalesForecast(state.workbookData);
  renderSalesInputs();
  const assumptions = getAssumptions();
  const drivers = extendLegacyDriversToJune2027(buildDrivers(state.workbookData), state.workbookData);
  const openingInventory = estimateOpeningInventory(state.workbookData);
  const scenarios = {
    Conservative: simulateScenario("Conservative", state.workbookData, drivers, openingInventory, assumptions),
    Base: simulateScenario("Base", state.workbookData, drivers, openingInventory, assumptions),
    "Peak-Safe": simulateScenario("Peak-Safe", state.workbookData, drivers, openingInventory, assumptions)
  };
  const comparison = compareScenarios(scenarios);
  const baseRows = scenarios.Base;
  state.lastBaseRows = baseRows;
  state.lastBaseCsv = rowsToCsv(baseRows);
  elements.downloadCsvButton.disabled = false;
  renderKpis(baseRows, comparison);
  buildTable(elements.scenarioTable, comparison, [
    { key: "scenario", label: "Scenario" },
    { key: "fyRecommendedPurchaseEta", label: "FY 買貨 ETA (P)", number: true },
    { key: "fyPackagingFee", label: "包裝費 (P)", number: true },
    { key: "fyStorageCost", label: "庫存成本 (P)", number: true },
    { key: "q4StorageCost", label: "Q4 庫存成本 (P)", number: true },
    { key: "lowestEndingCash", label: "最低現金 (P)", number: true },
    { key: "maxCreditCardBalance", label: "最大 CC (P)", number: true },
    { key: "riskMonths", label: "風險月份 (P)" }
  ]);
  buildTable(elements.detailTable, baseRows, [
    { key: "period", label: "Month" },
    { key: "salesForecast", label: "Sales Forecast (P)", number: true },
    { key: "salesYoyGrowth", label: "Sales YoY (P)", number: true },
    { key: "cogsDemand", label: "COGS (P)", number: true },
    { key: "recommendedPurchaseEta", label: "買貨 ETA (P)", number: true },
    { key: "endingInventory", label: "期末庫存 (P)", number: true },
    { key: "coverageDays", label: "覆蓋天數 (P)", number: true },
    { key: "packagingFee", label: "包裝費 (P)", number: true },
    { key: "storageCost", label: "庫存費 (P)", number: true },
    { key: "endingCash", label: "期末現金 (P)", number: true },
    { key: "inventoryFlag", label: "庫存 (P)" },
    { key: "cashFlag", label: "現金 (P)" },
    { key: "ccFlag", label: "信用卡 (P)" },
    { key: "storageFlag", label: "庫存費 (P)" }
  ]);
  const nextYearRows = baseRows.filter((row) => row.period >= "2027-01");
  elements.nextYearKpiGrid.innerHTML = [
    ["2027 H1 Sales (P)", sum(nextYearRows.map((row) => row.salesForecast))],
    ["2027 H1 建議採購 (P)", sum(nextYearRows.map((row) => row.recommendedPurchaseEta))],
    ["2027-06 期末庫存 (P)", nextYearRows[nextYearRows.length - 1]?.endingInventory || 0],
    ["2027 H1 最低現金 (P)", Math.min(...nextYearRows.map((row) => row.endingCash))]
  ].map(([label, value]) => `<div class="kpi-card"><span>${escapeHtml(label)}</span><strong>${numberFormat.format(value)}</strong></div>`).join("");
  buildTable(elements.nextYearTable, nextYearRows, [
    { key: "period", label: "Month" },
    { key: "salesForecast", label: "Sales Forecast (P)", number: true },
    { key: "salesYoyGrowth", label: "Sales YoY (P)", number: true },
    { key: "cogsDemand", label: "COGS (P)", number: true },
    { key: "recommendedPurchaseEta", label: "買貨 ETA (P)", number: true },
    { key: "endingInventory", label: "期末庫存 (P)", number: true },
    { key: "coverageDays", label: "覆蓋天數 (P)", number: true },
    { key: "packagingFee", label: "包裝費 (P)", number: true },
    { key: "storageCost", label: "庫存費 (P)", number: true },
    { key: "endingCash", label: "期末現金 (P)", number: true },
    { key: "inventoryFlag", label: "庫存 (P)" },
    { key: "cashFlag", label: "現金 (P)" },
    { key: "ccFlag", label: "信用卡 (P)" }
  ]);
  renderLineChart(elements.inventoryChart, baseRows, "endingInventory", "recommendedPurchaseEta");
  renderLineChart(elements.cashChart, baseRows, "endingCash", null, assumptions.cashFloor);
  renderDiagnostics(state.workbookData);
  elements.summaryPanel.classList.remove("hidden");
  elements.detailPanel.classList.remove("hidden");
  elements.nextYearPanel.classList.remove("hidden");
  elements.diagnosticPanel.classList.remove("hidden");
  showMessage("success", "預測完成", [`資料來源：${state.workbookData.sourceName}`, `Base 全年建議買貨 ETA：${numberFormat.format(comparison.find((row) => row.scenario === "Base").fyRecommendedPurchaseEta)}`]);
}

function setupTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.add("hidden"));
      button.classList.add("is-active");
      document.getElementById(button.dataset.tab).classList.remove("hidden");
    });
  });
}

function setupEvents() {
  elements.pickFileButton.addEventListener("click", (event) => { event.stopPropagation(); elements.fileInput.click(); });
  elements.pickFinanceFileButton.addEventListener("click", (event) => { event.stopPropagation(); elements.financeFileInput.click(); });
  elements.dropzone.addEventListener("click", () => elements.fileInput.click());
  elements.fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!isAllowedFile(file)) {
      setSelectedFile(null);
      showMessage("error", "檔案格式不支援", ["請上傳 .xlsx 或 .xls 檔案"]);
      return;
    }
    setSelectedFile(file);
  });
  elements.financeFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!isAllowedFile(file)) {
      setSelectedFinanceFile(null);
      showMessage("error", "Finance 檔案格式不支援", ["請上傳 .xlsx 或 .xls 檔案"]);
      return;
    }
    setSelectedFinanceFile(file);
  });
  elements.dropzone.addEventListener("dragover", (event) => { event.preventDefault(); elements.dropzone.classList.add("is-dragover"); });
  elements.dropzone.addEventListener("dragleave", () => elements.dropzone.classList.remove("is-dragover"));
  elements.dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.dropzone.classList.remove("is-dragover");
    const file = event.dataTransfer.files[0];
    if (!file || !isAllowedFile(file)) {
      showMessage("error", "檔案格式不支援", ["請上傳 .xlsx 或 .xls 檔案"]);
      return;
    }
    setSelectedFile(file);
  });
  elements.loadDemoButton.addEventListener("click", () => {
    state.workbookData = buildDemoData();
    state.financeData = null;
    state.salesForecast = generateDefaultSalesForecast(state.workbookData);
    renderSalesInputs();
    showMessage("success", "已載入範例資料", ["可直接產生庫存預測，或再上傳公司 workbook。"]);
  });
  elements.parseButton.addEventListener("click", async () => {
    if (!state.file && !state.financeFile) {
      showMessage("error", "請先選擇 Excel 檔案", ["建議同時上傳 Sales ff.xlsx 與 Finance forecast workbook。"]);
      return;
    }
    try {
      if (!window.XLSX) throw new Error("Excel parser 尚未載入，請確認網路可連到 CDN。 ");
      const details = [];
      if (state.file) {
        state.workbookData = await parseWorkbookFile(state.file);
        state.salesForecast = generateDefaultSalesForecast(state.workbookData);
        details.push(`Sales Index rows：${state.workbookData.indexRows.length}`);
        details.push(`Sales Daily rows：${state.workbookData.dailyRows.length}`);
      }
      if (state.financeFile) {
        state.financeData = await parseFinanceWorkbookFile(state.financeFile);
        state.salesForecast = state.financeData.sales.map((value, index) => ({
          month: index + 1,
          period: MONTH_LABELS[index],
          salesForecast: value,
          status: "Finance Y26 input"
        }));
        details.push(`Finance Y26 sales：${numberFormat.format(sum(state.financeData.sales))}`);
        details.push(`Finance existing ETA：${numberFormat.format(sum(state.financeData.existingPurchaseEta))}`);
      }
      renderSalesInputs();
      showMessage("success", "Workbook 讀取成功", details);
    } catch (error) {
      showMessage("error", "Workbook 讀取失敗", [error.message || String(error)]);
    }
  });
  elements.generateSalesButton.addEventListener("click", () => {
    if (!state.workbookData) state.workbookData = buildDemoData();
    state.salesForecast = generateDefaultSalesForecast(state.workbookData);
    renderSalesInputs();
  });
  elements.clearSalesButton.addEventListener("click", () => {
    state.salesForecast = MONTHS.map((month) => ({ month, period: MONTH_LABELS[month - 1], salesForecast: 0, status: "Manual input" }));
    renderSalesInputs();
  });
  elements.runForecastButton.addEventListener("click", runForecast);
  elements.downloadCsvButton.addEventListener("click", () => {
    if (!state.lastBaseCsv) return;
    const blob = new Blob([state.lastBaseCsv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "base_inventory_forecast.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
}

setupTabs();
setupEvents();
state.workbookData = buildDemoData();
state.salesForecast = generateDefaultSalesForecast(state.workbookData);
renderSalesInputs();
