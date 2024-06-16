document.addEventListener('DOMContentLoaded', () => {
    const carTypeElement = document.getElementById('car-type');
    const carValueElement = document.getElementById('car-value');
    const carValueRangeElement = document.getElementById('car-value-range');
    const leasePeriodElement = document.getElementById('lease-period');
    const leasePeriodRangeElement = document.getElementById('lease-period-range');
    const downPaymentElement = document.getElementById('down-payment');

    const leasingCostElement = document.getElementById('leasing-cost');
    const downPaymentValueElement = document.getElementById('down-payment-value');
    const downPaymentPercentElement = document.getElementById('down-payment-percent');
    const monthlyInstallmentElement = document.getElementById('monthly-installment');
    const interestRateElement = document.getElementById('interest-rate');

    const syncValues = (inputElement, rangeElement) => {
        inputElement.addEventListener('input', () => {
            rangeElement.value = inputElement.value;
            calculateResults();
        });
        rangeElement.addEventListener('input', () => {
            inputElement.value = rangeElement.value;
            calculateResults();
        });
    };

    const calculateResults = () => {
        const carType = carTypeElement.value;
        const carValue = parseFloat(carValueElement.value);
        const leasePeriod = parseInt(leasePeriodElement.value);
        const downPaymentPercent = parseFloat(downPaymentElement.value);

        const downPayment = (downPaymentPercent / 100) * carValue;
        const loanAmount = carValue - downPayment;
        const annualInterestRate = carType === 'new' ? 2.99 : 3.7;
        const monthlyInterestRate = (annualInterestRate / 100) / 12;
        const numberOfPayments = leasePeriod;
        const monthlyInstallment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        
        leasingCostElement.textContent = `€${carValue.toFixed(2)}`;
        downPaymentValueElement.textContent = `€${downPayment.toFixed(2)}`;
        downPaymentPercentElement.textContent = downPaymentPercent.toFixed(0);
        monthlyInstallmentElement.textContent = `€${monthlyInstallment.toFixed(2)}`;
        interestRateElement.textContent = annualInterestRate.toFixed(2);
    };

    syncValues(carValueElement, carValueRangeElement);
    syncValues(leasePeriodElement, leasePeriodRangeElement);

    carTypeElement.addEventListener('change', calculateResults);
    downPaymentElement.addEventListener('input', calculateResults);

    calculateResults();
});
