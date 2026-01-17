// Historical Tax Parameters (2015-2025)
const taxData = {
    2025: { pbb: 58800, stateLow: 625800, stateHigh: null },
    2024: { pbb: 57300, stateLow: 598500, stateHigh: null },
    2023: { pbb: 52500, stateLow: 598500, stateHigh: null },
    2022: { pbb: 48300, stateLow: 540700, stateHigh: null },
    2021: { pbb: 47600, stateLow: 523200, stateHigh: null },
    2020: { pbb: 47300, stateLow: 509300, stateHigh: null }, // Värnskatt abolished
    2019: { pbb: 46500, stateLow: 490700, stateHigh: 689300 },
    2018: { pbb: 45500, stateLow: 455300, stateHigh: 662300 },
    2017: { pbb: 44800, stateLow: 438900, stateHigh: 638500 },
    2016: { pbb: 44300, stateLow: 430200, stateHigh: 625800 },
    2015: { pbb: 44500, stateLow: 430200, stateHigh: 616100 }
};

// Expanded Municipality List (Top 50 + Extremes + Major Cities)
const municipalities = [
    { name: "Ale", rate: 31.85 },
    { name: "Alingsås", rate: 32.22 },
    { name: "Ängelholm", rate: 30.17 },
    { name: "Åre", rate: 33.10 },
    { name: "Arvika", rate: 33.10 },
    { name: "Askersund", rate: 33.45 },
    { name: "Avesta", rate: 33.20 },
    { name: "Berg", rate: 33.65 },
    { name: "Bjurholm", rate: 34.15 },
    { name: "Boden", rate: 33.84 },
    { name: "Bollebygd", rate: 33.37 },
    { name: "Bollnäs", rate: 33.37 },
    { name: "Borgholm", rate: 33.15 },
    { name: "Borlänge", rate: 33.55 },
    { name: "Borås", rate: 32.74 },
    { name: "Botkyrka", rate: 31.75 },
    { name: "Boxholm", rate: 33.15 },
    { name: "Bräcke", rate: 35.09 },
    { name: "Bromölla", rate: 32.75 },
    { name: "Burlöv", rate: 30.72 },
    { name: "Dals-Ed", rate: 34.34 },
    { name: "Danderyd", rate: 29.87 },
    { name: "Degerfors", rate: 35.30 }, // Highest 2025
    { name: "Dorotea", rate: 35.15 },
    { name: "Ekerö", rate: 31.00 },
    { name: "Eksjö", rate: 33.40 },
    { name: "Emmaboda", rate: 33.72 },
    { name: "Enköping", rate: 32.20 },
    { name: "Eskilstuna", rate: 32.95 },
    { name: "Eslöv", rate: 31.33 },
    { name: "Essunga", rate: 33.15 },
    { name: "Fagersta", rate: 33.10 },
    { name: "Falkenberg", rate: 32.32 },
    { name: "Falköping", rate: 33.15 },
    { name: "Falun", rate: 33.95 },
    { name: "Filipstad", rate: 33.35 },
    { name: "Finspång", rate: 33.10 },
    { name: "Flen", rate: 33.20 },
    { name: "Forshaga", rate: 33.40 },
    { name: "Färgelanda", rate: 33.94 },
    { name: "Gagnef", rate: 33.90 },
    { name: "Gislaved", rate: 32.95 },
    { name: "Gnesta", rate: 32.60 },
    { name: "Gnosjö", rate: 33.12 },
    { name: "Göteborg", rate: 32.60 },
    { name: "Gotland", rate: 33.60 },
    { name: "Grums", rate: 33.45 },
    { name: "Gullspång", rate: 33.50 },
    { name: "Gällivare", rate: 33.54 },
    { name: "Gävle", rate: 33.15 },
    { name: "Habo", rate: 33.35 },
    { name: "Hagfors", rate: 34.15 },
    { name: "Hallsberg", rate: 33.25 },
    { name: "Hallstahammar", rate: 32.94 },
    { name: "Halmstad", rate: 31.83 },
    { name: "Hammarö", rate: 35.20 },
    { name: "Haninge", rate: 31.51 },
    { name: "Haparanda", rate: 33.49 },
    { name: "Härjedalen", rate: 33.82 },
    { name: "Härnösand", rate: 34.49 },
    { name: "Heby", rate: 33.95 },
    { name: "Hedemora", rate: 34.00 },
    { name: "Helsingborg", rate: 31.28 },
    { name: "Herrljunga", rate: 33.20 },
    { name: "Hjo", rate: 33.10 },
    { name: "Hofors", rate: 33.90 },
    { name: "Höganäs", rate: 30.13 },
    { name: "Högsby", rate: 33.82 },
    { name: "Hörby", rate: 31.93 },
    { name: "Höör", rate: 32.28 },
    { name: "Huddinge", rate: 31.55 },
    { name: "Hudiksvall", rate: 33.45 },
    { name: "Hylte", rate: 32.83 },
    { name: "Järfälla", rate: 31.82 },
    { name: "Jokkmokk", rate: 34.04 },
    { name: "Jönköping", rate: 32.85 },
    { name: "Kalix", rate: 33.74 },
    { name: "Kalmar", rate: 33.12 },
    { name: "Karlsborg", rate: 33.20 },
    { name: "Karlshamn", rate: 33.20 },
    { name: "Karlskoga", rate: 33.30 },
    { name: "Karlskrona", rate: 33.29 },
    { name: "Karlstad", rate: 33.00 },
    { name: "Katrineholm", rate: 32.95 },
    { name: "Kävlinge", rate: 29.69 },
    { name: "Kil", rate: 33.30 },
    { name: "Kinda", rate: 33.10 },
    { name: "Kiruna", rate: 33.64 },
    { name: "Klippan", rate: 31.53 },
    { name: "Knivsta", rate: 32.52 },
    { name: "Köping", rate: 32.99 },
    { name: "Kramfors", rate: 34.39 },
    { name: "Kristianstad", rate: 32.08 },
    { name: "Kristinehamn", rate: 33.35 },
    { name: "Krokom", rate: 33.82 },
    { name: "Kumla", rate: 33.20 },
    { name: "Kungsbacka", rate: 31.65 },
    { name: "Kungsör", rate: 33.24 },
    { name: "Kungälv", rate: 32.18 },
    { name: "Laholm", rate: 31.83 },
    { name: "Landskrona", rate: 31.43 },
    { name: "Laxå", rate: 35.00 },
    { name: "Lekeberg", rate: 33.30 },
    { name: "Leksand", rate: 33.85 },
    { name: "Lerum", rate: 32.25 },
    { name: "Lessebo", rate: 33.95 },
    { name: "Lidingö", rate: 29.72 }, // Lowest 2025 range
    { name: "Lidköping", rate: 32.62 },
    { name: "Lilla Edet", rate: 33.64 },
    { name: "Lindesberg", rate: 33.65 },
    { name: "Linköping", rate: 31.35 },
    { name: "Ljungby", rate: 33.35 },
    { name: "Ljusdal", rate: 33.32 },
    { name: "Ljusnarsberg", rate: 33.85 },
    { name: "Lomma", rate: 30.13 },
    { name: "Ludvika", rate: 33.80 },
    { name: "Luleå", rate: 33.64 },
    { name: "Lund", rate: 30.12 },
    { name: "Lycksele", rate: 34.15 },
    { name: "Lysekil", rate: 34.09 },
    { name: "Malmö", rate: 32.42 },
    { name: "Malung-Sälen", rate: 33.43 },
    { name: "Mariestad", rate: 32.72 },
    { name: "Mark", rate: 32.89 },
    { name: "Markaryd", rate: 32.88 },
    { name: "Mellerud", rate: 34.29 },
    { name: "Mjölby", rate: 32.95 },
    { name: "Mora", rate: 33.67 },
    { name: "Motala", rate: 33.15 },
    { name: "Mullsjö", rate: 33.50 },
    { name: "Munkedal", rate: 34.86 },
    { name: "Munkfors", rate: 34.50 },
    { name: "Mölndal", rate: 31.80 },
    { name: "Mönsterås", rate: 33.52 },
    { name: "Mörbylånga", rate: 33.52 },
    { name: "Nacka", rate: 29.93 },
    { name: "Nässjö", rate: 33.55 },
    { name: "Nora", rate: 33.65 },
    { name: "Norberg", rate: 33.85 },
    { name: "Nordanstig", rate: 33.44 },
    { name: "Nordmaling", rate: 34.10 },
    { name: "Norrköping", rate: 32.75 },
    { name: "Norrtälje", rate: 31.30 },
    { name: "Norsjö", rate: 33.90 },
    { name: "Nybro", rate: 33.92 },
    { name: "Nykvarn", rate: 32.18 },
    { name: "Nyköping", rate: 32.25 },
    { name: "Nynäshamn", rate: 31.53 },
    { name: "Ockelbo", rate: 33.82 },
    { name: "Olofström", rate: 33.19 },
    { name: "Örebro", rate: 33.15 },
    { name: "Örkelljunga", rate: 31.33 },
    { name: "Örnsköldsvik", rate: 34.05 },
    { name: "Orsa", rate: 33.55 },
    { name: "Orust", rate: 33.24 },
    { name: "Osby", rate: 32.83 },
    { name: "Oskarshamn", rate: 33.27 },
    { name: "Österåker", rate: 28.98 }, // Lowest 2025
    { name: "Östersund", rate: 33.82 },
    { name: "Östhammar", rate: 32.95 },
    { name: "Östra Göinge", rate: 32.58 },
    { name: "Överkalix", rate: 33.94 },
    { name: "Övertorneå", rate: 33.79 },
    { name: "Oxelösund", rate: 32.60 },
    { name: "Pajala", rate: 33.99 },
    { name: "Partille", rate: 31.84 },
    { name: "Perstorp", rate: 32.08 },
    { name: "Piteå", rate: 33.29 },
    { name: "Ragunda", rate: 34.67 },
    { name: "Robertsfors", rate: 34.20 },
    { name: "Ronneby", rate: 33.75 },
    { name: "Rättvik", rate: 34.05 },
    { name: "Sala", rate: 33.15 },
    { name: "Salem", rate: 31.25 },
    { name: "Sandviken", rate: 33.97 },
    { name: "Säter", rate: 33.85 },
    { name: "Sävsjö", rate: 33.70 },
    { name: "Sigtuna", rate: 31.57 },
    { name: "Simrishamn", rate: 31.78 },
    { name: "Sjöbo", rate: 31.53 },
    { name: "Skara", rate: 33.19 },
    { name: "Skellefteå", rate: 33.10 },
    { name: "Skinnskatteberg", rate: 33.40 },
    { name: "Skövde", rate: 32.67 },
    { name: "Skurup", rate: 31.63 },
    { name: "Smedjebacken", rate: 33.90 },
    { name: "Söderhamn", rate: 33.09 },
    { name: "Söderköping", rate: 32.85 },
    { name: "Södertälje", rate: 31.95 },
    { name: "Sollefteå", rate: 34.60 },
    { name: "Sollentuna", rate: 29.80 },
    { name: "Solna", rate: 29.75 }, // Top low
    { name: "Sorsele", rate: 34.40 },
    { name: "Sotenäs", rate: 33.01 },
    { name: "Staffanstorp", rate: 30.14 },
    { name: "Stenungsund", rate: 32.79 },
    { name: "Stockholm", rate: 29.82 },
    { name: "Storfors", rate: 34.00 },
    { name: "Storuman", rate: 34.20 },
    { name: "Strängnäs", rate: 32.55 },
    { name: "Strömstad", rate: 33.10 },
    { name: "Strömsund", rate: 34.57 },
    { name: "Sundbyberg", rate: 31.15 },
    { name: "Sundsvall", rate: 34.33 },
    { name: "Sunne", rate: 33.65 },
    { name: "Surahammar", rate: 33.49 },
    { name: "Svalöv", rate: 31.63 },
    { name: "Svedala", rate: 30.93 },
    { name: "Svenljunga", rate: 33.40 },
    { name: "Säffle", rate: 33.55 },
    { name: "Täby", rate: 29.98 },
    { name: "Tanum", rate: 33.57 },
    { name: "Tibro", rate: 33.06 },
    { name: "Tidaholm", rate: 32.87 },
    { name: "Tierp", rate: 33.25 },
    { name: "Timrå", rate: 34.12 },
    { name: "Tingsryd", rate: 33.72 },
    { name: "Tjörn", rate: 33.09 },
    { name: "Tomelilla", rate: 31.78 },
    { name: "Torsby", rate: 33.60 },
    { name: "Torsås", rate: 33.37 },
    { name: "Tranemo", rate: 33.15 },
    { name: "Tranås", rate: 33.00 },
    { name: "Trelleborg", rate: 31.93 },
    { name: "Trollhättan", rate: 33.54 },
    { name: "Trosa", rate: 31.25 },
    { name: "Tyresö", rate: 31.58 },
    { name: "Uddevalla", rate: 33.34 },
    { name: "Ulricehamn", rate: 33.05 },
    { name: "Umeå", rate: 34.15 },
    { name: "Upplands Väsby", rate: 31.40 },
    { name: "Upplands-Bro", rate: 31.53 },
    { name: "Uppsala", rate: 33.20 },
    { name: "Uruvalla", rate: 33.29 }, // Assuming typo correction or removal
    { name: "Vadstena", rate: 33.25 },
    { name: "Vaggeryd", rate: 33.27 },
    { name: "Valdemarsvik", rate: 33.95 },
    { name: "Vallentuna", rate: 31.05 },
    { name: "Vänersborg", rate: 33.74 },
    { name: "Vännäs", rate: 34.40 },
    { name: "Vansbro", rate: 33.95 },
    { name: "Vara", rate: 32.05 },
    { name: "Varberg", rate: 32.23 },
    { name: "Västerås", rate: 31.69 },
    { name: "Västervik", rate: 33.55 },
    { name: "Vaxholm", rate: 30.63 },
    { name: "Växjö", rate: 32.54 },
    { name: "Vellinge", rate: 29.68 },
    { name: "Vetlanda", rate: 33.67 },
    { name: "Vilhelmina", rate: 34.40 },
    { name: "Vimmerby", rate: 33.92 },
    { name: "Vindeln", rate: 34.95 },
    { name: "Vingåker", rate: 33.70 },
    { name: "Vårgårda", rate: 32.64 },
    { name: "Ystad", rate: 31.53 },
    { name: "Åmål", rate: 34.10 },
    { name: "Ånge", rate: 34.52 },
    { name: "Årjäng", rate: 33.55 },
    { name: "Åsele", rate: 34.50 },
    { name: "Åstorp", rate: 31.43 },
    { name: "Åtvidaberg", rate: 33.75 },
    { name: "Älmhult", rate: 32.89 },
    { name: "Älvdalen", rate: 34.07 },
    { name: "Älvkarleby", rate: 34.05 },
    { name: "Älvsbyn", rate: 33.74 },
    { name: "Genomsnitt (Average)", rate: 32.41 },
].sort((a, b) => a.name.localeCompare(b.name));

const averageRate = 32.41;

// Constants
const PUBLIC_SERVICE_RATE = 0.01;
const FUNERAL_FEE_RATE = 0.258; // Approx
const CHURCH_FEE_RATE = 1.0;

let chartInstance = null; // Global chart reference

document.addEventListener('DOMContentLoaded', () => {
    populateMunicipalities();

    // Auto-calculate on input change
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            calculateTax();
            // Debounce chart update if performance becomes an issue, but standard is fine
            updateHistoryChart();
        });
    });

    // Run once on load
    calculateTax();
    updateHistoryChart();
});

function populateMunicipalities() {
    const select = document.getElementById('municipality');
    select.innerHTML = ''; // Clear existing
    municipalities.forEach(m => {
        const option = document.createElement('option');
        option.value = m.rate;
        option.textContent = `${m.name} (${m.rate}%)`;
        if (m.name.includes('Genomsnitt') || m.name.includes('Stockholm')) {
            if (m.name === 'Stockholm') option.selected = true;
        }
        select.appendChild(option);
    });

    const otherOption = document.createElement('option');
    otherOption.value = "custom";
    otherOption.textContent = "Annan (Ange skattesats)";
    select.appendChild(otherOption);
}

// Logic refactored to be pure for reuse in loop
function calculateInternal(year, incomeMonth, age, taxRate, isChurchMember) {
    const incomeYear = incomeMonth * 12;
    const params = taxData[year] || taxData[2025];
    const PBB = params.pbb;

    // 1. Grundavdrag
    const ga = calculateGrundavdrag(incomeYear, age, PBB);
    const taxableIncome = Math.max(0, incomeYear - ga);

    // 2. Municipal Tax
    const municipalTax = taxableIncome * (taxRate / 100);

    // 3. State Tax
    let stateTax = 0;
    if (taxableIncome > params.stateLow) {
        stateTax += (taxableIncome - params.stateLow) * 0.20;
    }
    if (params.stateHigh && taxableIncome > params.stateHigh) {
        stateTax += (taxableIncome - params.stateHigh) * 0.05;
    }

    // 4. Public Service Fee
    const psFeeCap = year >= 2024 ? 1200 : 1300;
    const psFee = Math.min(incomeYear * PUBLIC_SERVICE_RATE, psFeeCap);

    // 5. Funeral Fee
    const funeralFee = taxableIncome * (FUNERAL_FEE_RATE / 100);

    // 6. Church Fee
    let churchFee = 0;
    if (isChurchMember) {
        churchFee = taxableIncome * (CHURCH_FEE_RATE / 100);
    }

    // 7. Jobbskatteavdrag
    const jsa = calculateJobbskatteavdrag(incomeYear, age, ga, municipalTax, PBB, year);

    // Total
    const totalTaxRaw = municipalTax + stateTax + psFee + funeralFee + churchFee;
    const totalTax = Math.max(0, totalTaxRaw - jsa);
    const netIncomeYear = incomeYear - totalTax;

    return {
        incomeYear,
        municipalTax,
        stateTax,
        fees: psFee + funeralFee + churchFee,
        jsa,
        totalTax,
        netIncomeYear,
        netIncomeMonth: netIncomeYear / 12
    };
}

// UI Handler
function calculateTax() {
    const year = parseInt(document.getElementById('year').value) || 2025;
    let incomeMonth = parseFloat(document.getElementById('income').value) || 0;
    const age = parseInt(document.getElementById('age').value);
    let taxRate = parseFloat(document.getElementById('municipality').value);
    const isChurchMember = document.getElementById('church').checked;

    if (document.getElementById('municipality').value === 'custom') {
        taxRate = 32.41;
    }

    const res = calculateInternal(year, incomeMonth, age, taxRate, isChurchMember);

    // Update UI Elements
    animateValue('result-net', res.netIncomeMonth);
    document.getElementById('result-net-year').textContent = formatCurrency(res.netIncomeYear);

    document.getElementById('val-gross').textContent = formatCurrency(incomeMonth);
    document.getElementById('val-municipal').textContent = formatCurrency(res.municipalTax / 12);
    document.getElementById('val-state').textContent = formatCurrency(res.stateTax / 12);
    document.getElementById('val-fees').textContent = formatCurrency(res.fees / 12);
    document.getElementById('val-jsa').textContent = "-" + formatCurrency(res.jsa / 12);
    document.getElementById('val-total-tax').textContent = formatCurrency(res.totalTax / 12);

    const taxShare = (res.totalTax / res.incomeYear) * 100;
    const netShare = 100 - taxShare;

    const barTax = document.getElementById('bar-tax');
    const barNet = document.getElementById('bar-net');

    barTax.style.width = `${taxShare}%`;
    barNet.style.width = `${netShare}%`;

    // Set text content if share is significant enough to show
    barTax.innerText = taxShare > 5 ? `${Math.round(taxShare)}%` : '';
    barNet.innerText = netShare > 5 ? `${Math.round(netShare)}%` : '';
}


function updateHistoryChart() {
    const canvas = document.getElementById('historyChart');
    const ctx = canvas.getContext('2d');

    // Get current fixed params (except year)
    let incomeMonth = parseFloat(document.getElementById('income').value) || 0;
    const age = parseInt(document.getElementById('age').value);
    let taxRate = parseFloat(document.getElementById('municipality').value);
    const isChurchMember = document.getElementById('church').checked;

    if (document.getElementById('municipality').value === 'custom') {
        taxRate = 32.41;
    }

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
    const dataPoints = years.map(y => {
        const res = calculateInternal(y, incomeMonth, age, taxRate, isChurchMember);
        return res.netIncomeMonth;
    });

    if (chartInstance) {
        chartInstance.destroy(); // Clear old chart
    }

    // Colors
    const colorLeft = '#ef4444'; // Red-500
    const colorRight = '#3b82f6'; // Blue-500
    const colorLeftFill = 'rgba(239, 68, 68, 0.2)';
    const colorRightFill = 'rgba(59, 130, 246, 0.2)';

    // Gradient Calculation
    // We need to know the pixel position of 2022 to switch the gradient.
    // Since we don't have the chart instance fully rendered to get exact pixels yet,
    // we can use a scriptable option for backgroundColor or approximate it if the axis is linear.
    // However, Chart.js context is best accessed inside a plugin or after render.
    // A simpler approach for the fill is to use a linear gradient based on the known axis ratio.
    // 2015 (index 0) to 2025 (index 10). Total 10 segments / intervals.
    // 2022 is index 7.
    // Split point: 7 / 10 = 0.7 (70% across)

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); // Horizontal gradient
    // Note: canvas.width might not be accurate before render layout, but often close enough for rough ratio if responsive.
    // BETTER: Use a Function for backgroundColor to return the gradient using the chart area.

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Nettolön (kr/mån)',
                data: dataPoints,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                // Segment styling for the Line
                segment: {
                    borderColor: ctx => {
                        // ctx.p0 is the start point, ctx.p1 is the end point of the segment
                        // p0DataIndex is the index of the start point
                        const index = ctx.p0DataIndex;
                        const year = years[index];
                        // If the segment starts at 2022 or later, it connects to 2023+, so assume "Transition" or "Right".
                        // Transition 2022->2023: Let's color it Blue (Right) as the change happened end of 2022.
                        return year >= 2022 ? colorRight : colorLeft;
                    }
                },
                // Point styling
                pointBackgroundColor: ctx => {
                    const index = ctx.dataIndex;
                    const year = years[index];
                    return year > 2022 ? colorRight : colorLeft;
                },
                // Background Fill using Scriptable Option to get Chart Area
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea, scales } = chart;
                    if (!chartArea) return null; // Wait for chart area

                    const leftYearIndex = 0; // 2015
                    const rightYearIndex = 10; // 2025
                    const switchYearIndex = 7; // 2022

                    // X positions
                    const xAxis = scales.x;
                    if (!xAxis) return null;

                    const xStart = xAxis.getPixelForValue(years[leftYearIndex]);
                    const xEnd = xAxis.getPixelForValue(years[rightYearIndex]);
                    const xSwitch = xAxis.getPixelForValue(years[switchYearIndex]);

                    if (!isFinite(xStart) || !isFinite(xEnd) || !isFinite(xSwitch)) {
                        return colorLeftFill; // Fallback
                    }

                    const gradient = ctx.createLinearGradient(xStart, 0, xEnd, 0);

                    // Calculate stop position (0 to 1)
                    const totalWidth = xEnd - xStart;
                    if (totalWidth <= 0) return colorLeftFill;

                    let switchPos = (xSwitch - xStart) / totalWidth;

                    // Clamp switchPos to 0-1 to be safe
                    switchPos = Math.max(0, Math.min(1, switchPos));

                    gradient.addColorStop(0, colorLeftFill);
                    gradient.addColorStop(switchPos, colorLeftFill);
                    gradient.addColorStop(switchPos, colorRightFill);
                    gradient.addColorStop(1, colorRightFill);

                    return gradient;
                }
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: '#f8fafc' }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += formatCurrency(context.parsed.y);
                            }
                            return label;
                        },
                        afterLabel: function (context) {
                            const year = years[context.dataIndex];
                            return year <= 2022 ? "Regering: S/MP (Vänster)" : "Regering: M/KD/L/SD (Höger)";
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}


// Grundavdrag Calculation (PBB based)
function calculateGrundavdrag(income, age, PBB) {
    if (age === 1) { // 66+ (Elderly) - Simplified curve
        // Enhanced GA
        if (income < 1.0 * PBB) return Math.min(income, 1.1 * PBB);
        if (income > 10 * PBB) return 1.5 * PBB; // Plateau
        return 2.0 * PBB; // Roughly higher
    }

    // Standard (<66)
    if (income < 0.423 * PBB) return income;

    if (income < 3.0 * PBB) {
        // Ramp up
        return 0.423 * PBB + (income - 0.423 * PBB) * 0.2;
    }
    if (income < 8.0 * PBB) {
        // Plateau ~0.77 PBB
        return 0.77 * PBB;
    }
    // Ramp down to floor
    const floor = 0.293 * PBB;
    if (income < 13.54 * PBB) {
        // Drops linearly
        return Math.max(floor, 0.77 * PBB - (income - 8.0 * PBB) * 0.1);
    }
    return floor;
}

// Jobbskatteavdrag Calculation
function calculateJobbskatteavdrag(income, age, ga, municipalTax, PBB, year) {
    if (age === 1) {
        return Math.min(income * 0.05, 10000);
    }

    const workIncome = income;
    const taxBase = workIncome - ga;
    if (taxBase <= 0) return 0;

    let jsa = 0;
    if (income < 1 * PBB) {
        jsa = (income - ga);
    } else if (income < 3 * PBB) {
        jsa = (1 * PBB) + (income - 1 * PBB) * 0.3;
    } else {
        jsa = (1.5 * PBB) + (income - 3 * PBB) * 0.1;
    }

    let cap = 35000;
    if (year >= 2024) cap = 42000;
    if (year <= 2020) cap = 30000;

    jsa = Math.min(jsa, cap);

    // PHASE OUT LOGIC (2016 - 2024)
    if (year >= 2016 && year <= 2024) {
        const phaseOutStart = 11 * PBB; // Approx 50k-60k
        if (income > phaseOutStart) {
            const reduction = (income - phaseOutStart) * 0.03;
            jsa = Math.max(0, jsa - reduction);
        }
    }

    return Math.min(jsa, municipalTax);
}

function formatCurrency(val) {
    return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(val);
}

function animateValue(id, end) {
    const obj = document.getElementById(id);
    const start = parseFloat(obj.innerText.replace(/[^\d]/g, '')) || 0;
    if (start === end) return;
    obj.innerHTML = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 }).format(end);
}
