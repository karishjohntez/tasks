
    
    const grossPay = 20000;
    const taxRate = 0.16;
    const nhifRate = 0.02;
    const housingLevyRate = 0.03;

    const tax = grossPay * taxRate;
    const nhif = grossPay * nhifRate;
    const housingLevy = grossPay * housingLevyRate;
    const netPay = grossPay - tax - nhif - housingLevy;

    
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("nhif").textContent = nhif.toFixed(2);
    document.getElementById("housingLevy").textContent = housingLevy.toFixed(2);
    document.getElementById("netPay").textContent = netPay.toFixed(2);
    
    
    function calculateNetPay() {
        const grossPay = parseFloat(document.getElementById("grossPayInput").value);
        const taxRate = parseFloat(document.getElementById("taxRateInput").value) / 100;
        const nhifRate = parseFloat(document.getElementById("nhifRateInput").value) / 100;
        const housingLevyRate = parseFloat(document.getElementById("housingLevyRateInput").value) / 100;

        const tax = grossPay * taxRate;
        const nhif = grossPay * nhifRate;
        const housingLevy = grossPay * housingLevyRate;
        const netPay = grossPay - tax - nhif - housingLevy;

        document.getElementById("tax").textContent = tax.toFixed(2);
        document.getElementById("nhif").textContent = nhif.toFixed(2);
        document.getElementById("housingLevy").textContent = housingLevy.toFixed(2);
        document.getElementById("netPay").textContent = netPay.toFixed(2);
    }

    
