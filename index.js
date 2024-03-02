
    
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
