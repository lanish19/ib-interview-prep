import React, { useState } from 'react';

const FinancialCalculator = ({ calculatorType = 'dcf' }) => {
  // State for DCF calculator
  const [dcfInputs, setDcfInputs] = useState({
    initialCashFlow: 1000000,
    growthRate: 5,
    terminalGrowthRate: 2,
    discountRate: 10,
    forecastPeriod: 5
  });
  
  // State for WACC calculator
  const [waccInputs, setWaccInputs] = useState({
    equityValue: 70,
    debtValue: 30,
    costOfEquity: 12,
    costOfDebt: 5,
    taxRate: 25
  });
  
  // State for LBO calculator
  const [lboInputs, setLboInputs] = useState({
    purchasePrice: 1000000000,
    equityContribution: 30,
    ebitdaMultiple: 8,
    ebitdaMargin: 20,
    revenue: 500000000,
    exitYear: 5,
    exitMultiple: 9
  });
  
  // State for Comps calculator
  const [compsInputs, setCompsInputs] = useState({
    companyEbitda: 50000000,
    peerEbitdaMultiples: '7, 8, 9, 10, 11',
    companyRevenue: 250000000,
    peerRevenueMultiples: '1.5, 2.0, 2.5, 3.0, 3.5'
  });
  
  // State for Accretion/Dilution calculator
  const [accretionInputs, setAccretionInputs] = useState({
    acquirerEPS: 2.5,
    acquirerShares: 100000000,
    acquirerPrice: 50,
    targetEPS: 1.8,
    targetShares: 50000000,
    offerPremium: 30,
    synergies: 50000000,
    taxRate: 25
  });
  
  // State for calculator results
  const [results, setResults] = useState(null);
  
  // Handle input changes for different calculators
  const handleDcfInputChange = (e) => {
    const { name, value } = e.target;
    setDcfInputs({
      ...dcfInputs,
      [name]: parseFloat(value)
    });
  };
  
  const handleWaccInputChange = (e) => {
    const { name, value } = e.target;
    setWaccInputs({
      ...waccInputs,
      [name]: parseFloat(value)
    });
  };
  
  const handleLboInputChange = (e) => {
    const { name, value } = e.target;
    setLboInputs({
      ...lboInputs,
      [name]: parseFloat(value)
    });
  };
  
  const handleCompsInputChange = (e) => {
    const { name, value } = e.target;
    setCompsInputs({
      ...compsInputs,
      [name]: name.includes('Multiples') ? value : parseFloat(value)
    });
  };
  
  const handleAccretionInputChange = (e) => {
    const { name, value } = e.target;
    setAccretionInputs({
      ...accretionInputs,
      [name]: parseFloat(value)
    });
  };
  
  // Calculate DCF
  const calculateDcf = () => {
    const { initialCashFlow, growthRate, terminalGrowthRate, discountRate, forecastPeriod } = dcfInputs;
    
    // Calculate present value of forecast period cash flows
    let presentValueForecastCashFlows = 0;
    let currentCashFlow = initialCashFlow;
    
    for (let year = 1; year <= forecastPeriod; year++) {
      currentCashFlow = currentCashFlow * (1 + growthRate / 100);
      presentValueForecastCashFlows += currentCashFlow / Math.pow(1 + discountRate / 100, year);
    }
    
    // Calculate terminal value
    const terminalCashFlow = currentCashFlow * (1 + terminalGrowthRate / 100);
    const terminalValue = terminalCashFlow / (discountRate / 100 - terminalGrowthRate / 100);
    const presentValueTerminalValue = terminalValue / Math.pow(1 + discountRate / 100, forecastPeriod);
    
    // Calculate enterprise value
    const enterpriseValue = presentValueForecastCashFlows + presentValueTerminalValue;
    
    setResults({
      presentValueForecastCashFlows: presentValueForecastCashFlows.toFixed(2),
      presentValueTerminalValue: presentValueTerminalValue.toFixed(2),
      enterpriseValue: enterpriseValue.toFixed(2),
      terminalValuePercentage: ((presentValueTerminalValue / enterpriseValue) * 100).toFixed(2)
    });
  };
  
  // Calculate WACC
  const calculateWacc = () => {
    const { equityValue, debtValue, costOfEquity, costOfDebt, taxRate } = waccInputs;
    
    const totalValue = equityValue + debtValue;
    const equityWeight = equityValue / totalValue;
    const debtWeight = debtValue / totalValue;
    
    const wacc = (equityWeight * costOfEquity) + (debtWeight * costOfDebt * (1 - taxRate / 100));
    
    setResults({
      equityWeight: (equityWeight * 100).toFixed(2),
      debtWeight: (debtWeight * 100).toFixed(2),
      afterTaxCostOfDebt: (costOfDebt * (1 - taxRate / 100)).toFixed(2),
      wacc: wacc.toFixed(2)
    });
  };
  
  // Calculate LBO
  const calculateLbo = () => {
    const { purchasePrice, equityContribution, ebitdaMultiple, ebitdaMargin, revenue, exitYear, exitMultiple } = lboInputs;
    
    const equity = purchasePrice * (equityContribution / 100);
    const debt = purchasePrice - equity;
    
    const ebitda = revenue * (ebitdaMargin / 100);
    const entryMultiple = purchasePrice / ebitda;
    
    // Assume 5% annual growth for simplicity
    const exitEbitda = ebitda * Math.pow(1.05, exitYear);
    const exitEnterpriseValue = exitEbitda * exitMultiple;
    
    // Assume 20% of debt is paid down each year for simplicity
    const remainingDebt = debt * Math.pow(0.8, exitYear);
    const exitEquityValue = exitEnterpriseValue - remainingDebt;
    
    const equityMultiple = exitEquityValue / equity;
    const irr = Math.pow(equityMultiple, 1/exitYear) - 1;
    
    setResults({
      equity: equity.toFixed(2),
      debt: debt.toFixed(2),
      debtToEquityRatio: (debt / equity).toFixed(2),
      entryMultiple: entryMultiple.toFixed(2),
      exitEquityValue: exitEquityValue.toFixed(2),
      equityMultiple: equityMultiple.toFixed(2),
      irr: (irr * 100).toFixed(2)
    });
  };
  
  // Calculate Comps
  const calculateComps = () => {
    const { companyEbitda, peerEbitdaMultiples, companyRevenue, peerRevenueMultiples } = compsInputs;
    
    const ebitdaMultiplesArray = peerEbitdaMultiples.split(',').map(x => parseFloat(x.trim()));
    const revenueMultiplesArray = peerRevenueMultiples.split(',').map(x => parseFloat(x.trim()));
    
    const avgEbitdaMultiple = ebitdaMultiplesArray.reduce((a, b) => a + b, 0) / ebitdaMultiplesArray.length;
    const avgRevenueMultiple = revenueMultiplesArray.reduce((a, b) => a + b, 0) / revenueMultiplesArray.length;
    
    const ebitdaBasedValue = companyEbitda * avgEbitdaMultiple;
    const revenueBasedValue = companyRevenue * avgRevenueMultiple;
    
    setResults({
      avgEbitdaMultiple: avgEbitdaMultiple.toFixed(2),
      ebitdaBasedValue: ebitdaBasedValue.toFixed(2),
      avgRevenueMultiple: avgRevenueMultiple.toFixed(2),
      revenueBasedValue: revenueBasedValue.toFixed(2),
      blendedValue: ((ebitdaBasedValue + revenueBasedValue) / 2).toFixed(2)
    });
  };
  
  // Calculate Accretion/Dilution
  const calculateAccretion = () => {
    const { acquirerEPS, acquirerShares, acquirerPrice, targetEPS, targetShares, offerPremium, synergies, taxRate } = accretionInputs;
    
    const acquirerMarketCap = acquirerShares * acquirerPrice;
    const targetPrice = acquirerPrice * (1 + offerPremium / 100);
    const dealValue = targetShares * targetPrice;
    
    // Assume 50% stock, 50% cash for simplicity
    const newShares = (dealValue * 0.5) / acquirerPrice;
    const totalShares = acquirerShares + newShares;
    
    const combinedEarnings = (acquirerEPS * acquirerShares) + (targetEPS * targetShares) + (synergies * (1 - taxRate / 100));
    const newEPS = combinedEarnings / totalShares;
    
    const accretionDilution = ((newEPS / acquirerEPS) - 1) * 100;
    
    setResults({
      dealValue: dealValue.toFixed(2),
      newShares: newShares.toFixed(0),
      totalShares: totalShares.toFixed(0),
      newEPS: newEPS.toFixed(2),
      accretionDilution: accretionDilution.toFixed(2),
      accretionDilutionText: accretionDilution >= 0 ? 'Accretive' : 'Dilutive'
    });
  };
  
  // Handle calculation based on calculator type
  const handleCalculate = () => {
    switch (calculatorType) {
      case 'dcf':
        calculateDcf();
        break;
      case 'wacc':
        calculateWacc();
        break;
      case 'lbo':
        calculateLbo();
        break;
      case 'comps':
        calculateComps();
        break;
      case 'accretion':
        calculateAccretion();
        break;
      default:
        calculateDcf();
    }
  };
  
  // Render DCF calculator
  const renderDcfCalculator = () => (
    <>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="initialCashFlow" className="form-label">Initial Cash Flow ($)</label>
          <input
            type="number"
            className="form-control"
            id="initialCashFlow"
            name="initialCashFlow"
            value={dcfInputs.initialCashFlow}
            onChange={handleDcfInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="growthRate" className="form-label">Growth Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="growthRate"
            name="growthRate"
            value={dcfInputs.growthRate}
            onChange={handleDcfInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label htmlFor="terminalGrowthRate" className="form-label">Terminal Growth Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="terminalGrowthRate"
            name="terminalGrowthRate"
            value={dcfInputs.terminalGrowthRate}
            onChange={handleDcfInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="discountRate" className="form-label">Discount Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="discountRate"
            name="discountRate"
            value={dcfInputs.discountRate}
            onChange={handleDcfInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="forecastPeriod" className="form-label">Forecast Period (Years)</label>
          <input
            type="number"
            className="form-control"
            id="forecastPeriod"
            name="forecastPeriod"
            value={dcfInputs.forecastPeriod}
            onChange={handleDcfInputChange}
          />
        </div>
      </div>
    </>
  );
  
  // Render WACC calculator
  const renderWaccCalculator = () => (
    <>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="equityValue" className="form-label">Equity Value (%)</label>
          <input
            type="number"
            className="form-control"
            id="equityValue"
            name="equityValue"
            value={waccInputs.equityValue}
            onChange={handleWaccInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="debtValue" className="form-label">Debt Value (%)</label>
          <input
            type="number"
            className="form-control"
            id="debtValue"
            name="debtValue"
            value={waccInputs.debtValue}
            onChange={handleWaccInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label htmlFor="costOfEquity" className="form-label">Cost of Equity (%)</label>
          <input
            type="number"
            className="form-control"
            id="costOfEquity"
            name="costOfEquity"
            value={waccInputs.costOfEquity}
            onChange={handleWaccInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="costOfDebt" className="form-label">Cost of Debt (%)</label>
          <input
            type="number"
            className="form-control"
            id="costOfDebt"
            name="costOfDebt"
            value={waccInputs.costOfDebt}
            onChange={handleWaccInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="taxRate" className="form-label">Tax Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="taxRate"
            name="taxRate"
            value={waccInputs.taxRate}
            onChange={handleWaccInputChange}
          />
        </div>
      </div>
    </>
  );
  
  // Render LBO calculator
  const renderLboCalculator = () => (
    <>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="purchasePrice" className="form-label">Purchase Price ($)</label>
          <input
            type="number"
            className="form-control"
            id="purchasePrice"
            name="purchasePrice"
            value={lboInputs.purchasePrice}
            onChange={handleLboInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="equityContribution" className="form-label">Equity Contribution (%)</label>
          <input
            type="number"
            className="form-control"
            id="equityContribution"
            name="equityContribution"
            value={lboInputs.equityContribution}
            onChange={handleLboInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label htmlFor="revenue" className="form-label">Revenue ($)</label>
          <input
            type="number"
            className="form-control"
            id="revenue"
            name="revenue"
            value={lboInputs.revenue}
            onChange={handleLboInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="ebitdaMargin" className="form-label">EBITDA Margin (%)</label>
          <input
            type="number"
            className="form-control"
            id="ebitdaMargin"
            name="ebitdaMargin"
            value={lboInputs.ebitdaMargin}
            onChange={handleLboInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="ebitdaMultiple" className="form-label">Entry EBITDA Multiple</label>
          <input
            type="number"
            className="form-control"
            id="ebitdaMultiple"
            name="ebitdaMultiple"
            value={lboInputs.ebitdaMultiple}
            onChange={handleLboInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="exitYear" className="form-label">Exit Year</label>
          <input
            type="number"
            className="form-control"
            id="exitYear"
            name="exitYear"
            value={lboInputs.exitYear}
            onChange={handleLboInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="exitMultiple" className="form-label">Exit EBITDA Multiple</label>
          <input
            type="number"
            className="form-control"
            id="exitMultiple"
            name="exitMultiple"
            value={lboInputs.exitMultiple}
            onChange={handleLboInputChange}
          />
        </div>
      </div>
    </>
  );
  
  // Render Comps calculator
  const renderCompsCalculator = () => (
    <>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="companyEbitda" className="form-label">Company EBITDA ($)</label>
          <input
            type="number"
            className="form-control"
            id="companyEbitda"
            name="companyEbitda"
            value={compsInputs.companyEbitda}
            onChange={handleCompsInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="peerEbitdaMultiples" className="form-label">Peer EBITDA Multiples (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="peerEbitdaMultiples"
            name="peerEbitdaMultiples"
            value={compsInputs.peerEbitdaMultiples}
            onChange={handleCompsInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="companyRevenue" className="form-label">Company Revenue ($)</label>
          <input
            type="number"
            className="form-control"
            id="companyRevenue"
            name="companyRevenue"
            value={compsInputs.companyRevenue}
            onChange={handleCompsInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="peerRevenueMultiples" className="form-label">Peer Revenue Multiples (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="peerRevenueMultiples"
            name="peerRevenueMultiples"
            value={compsInputs.peerRevenueMultiples}
            onChange={handleCompsInputChange}
          />
        </div>
      </div>
    </>
  );
  
  // Render Accretion/Dilution calculator
  const renderAccretionCalculator = () => (
    <>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="acquirerEPS" className="form-label">Acquirer EPS ($)</label>
          <input
            type="number"
            className="form-control"
            id="acquirerEPS"
            name="acquirerEPS"
            value={accretionInputs.acquirerEPS}
            onChange={handleAccretionInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="targetEPS" className="form-label">Target EPS ($)</label>
          <input
            type="number"
            className="form-control"
            id="targetEPS"
            name="targetEPS"
            value={accretionInputs.targetEPS}
            onChange={handleAccretionInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="acquirerShares" className="form-label">Acquirer Shares Outstanding</label>
          <input
            type="number"
            className="form-control"
            id="acquirerShares"
            name="acquirerShares"
            value={accretionInputs.acquirerShares}
            onChange={handleAccretionInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="targetShares" className="form-label">Target Shares Outstanding</label>
          <input
            type="number"
            className="form-control"
            id="targetShares"
            name="targetShares"
            value={accretionInputs.targetShares}
            onChange={handleAccretionInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label htmlFor="acquirerPrice" className="form-label">Acquirer Share Price ($)</label>
          <input
            type="number"
            className="form-control"
            id="acquirerPrice"
            name="acquirerPrice"
            value={accretionInputs.acquirerPrice}
            onChange={handleAccretionInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="offerPremium" className="form-label">Offer Premium (%)</label>
          <input
            type="number"
            className="form-control"
            id="offerPremium"
            name="offerPremium"
            value={accretionInputs.offerPremium}
            onChange={handleAccretionInputChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="synergies" className="form-label">Annual Synergies ($)</label>
          <input
            type="number"
            className="form-control"
            id="synergies"
            name="synergies"
            value={accretionInputs.synergies}
            onChange={handleAccretionInputChange}
          />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label htmlFor="taxRate" className="form-label">Tax Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="taxRate"
            name="taxRate"
            value={accretionInputs.taxRate}
            onChange={handleAccretionInputChange}
          />
        </div>
      </div>
    </>
  );
  
  // Render calculator based on type
  const renderCalculator = () => {
    switch (calculatorType) {
      case 'dcf':
        return renderDcfCalculator();
      case 'wacc':
        return renderWaccCalculator();
      case 'lbo':
        return renderLboCalculator();
      case 'comps':
        return renderCompsCalculator();
      case 'accretion':
        return renderAccretionCalculator();
      default:
        return renderDcfCalculator();
    }
  };
  
  // Render DCF results
  const renderDcfResults = () => (
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Present Value of Forecast Cash Flows</h5>
            <p className="card-text display-6">${results.presentValueForecastCashFlows}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Present Value of Terminal Value</h5>
            <p className="card-text display-6">${results.presentValueTerminalValue}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-primary bg-opacity-10 h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Enterprise Value</h5>
            <p className="card-text display-6">${results.enterpriseValue}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Terminal Value % of Enterprise Value</h5>
            <p className="card-text display-6">{results.terminalValuePercentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render WACC results
  const renderWaccResults = () => (
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Equity Weight</h5>
            <p className="card-text display-6">{results.equityWeight}%</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Debt Weight</h5>
            <p className="card-text display-6">{results.debtWeight}%</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">After-Tax Cost of Debt</h5>
            <p className="card-text display-6">{results.afterTaxCostOfDebt}%</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-primary bg-opacity-10 h-100">
          <div className="card-body p-4">
            <h5 className="card-title">WACC</h5>
            <p className="card-text display-6">{results.wacc}%</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render LBO results
  const renderLboResults = () => (
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Equity</h5>
            <p className="card-text display-6">${results.equity}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Debt</h5>
            <p className="card-text display-6">${results.debt}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Debt/Equity Ratio</h5>
            <p className="card-text display-6">{results.debtToEquityRatio}x</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Entry Multiple</h5>
            <p className="card-text display-6">{results.entryMultiple}x</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Exit Equity Value</h5>
            <p className="card-text display-6">${results.exitEquityValue}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Equity Multiple</h5>
            <p className="card-text display-6">{results.equityMultiple}x</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card bg-primary bg-opacity-10 h-100">
          <div className="card-body p-4">
            <h5 className="card-title">IRR</h5>
            <p className="card-text display-6">{results.irr}%</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render Comps results
  const renderCompsResults = () => (
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Average EBITDA Multiple</h5>
            <p className="card-text display-6">{results.avgEbitdaMultiple}x</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">EBITDA-Based Value</h5>
            <p className="card-text display-6">${results.ebitdaBasedValue}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Average Revenue Multiple</h5>
            <p className="card-text display-6">{results.avgRevenueMultiple}x</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Revenue-Based Value</h5>
            <p className="card-text display-6">${results.revenueBasedValue}</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card bg-primary bg-opacity-10 h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Blended Enterprise Value</h5>
            <p className="card-text display-6">${results.blendedValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render Accretion/Dilution results
  const renderAccretionResults = () => (
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Deal Value</h5>
            <p className="card-text display-6">${results.dealValue}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">New Shares Issued</h5>
            <p className="card-text display-6">{results.newShares}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">Total Shares Post-Deal</h5>
            <p className="card-text display-6">{results.totalShares}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body p-4">
            <h5 className="card-title">New EPS</h5>
            <p className="card-text display-6">${results.newEPS}</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className={`card ${results.accretionDilution >= 0 ? 'bg-success' : 'bg-danger'} bg-opacity-10 h-100`}>
          <div className="card-body p-4">
            <h5 className="card-title">Accretion/Dilution</h5>
            <p className="card-text display-6">
              {results.accretionDilution}% ({results.accretionDilutionText})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render results based on calculator type
  const renderResults = () => {
    if (!results) return null;
    
    switch (calculatorType) {
      case 'dcf':
        return renderDcfResults();
      case 'wacc':
        return renderWaccResults();
      case 'lbo':
        return renderLboResults();
      case 'comps':
        return renderCompsResults();
      case 'accretion':
        return renderAccretionResults();
      default:
        return renderDcfResults();
    }
  };
  
  // Get calculator title
  const getCalculatorTitle = () => {
    switch (calculatorType) {
      case 'dcf':
        return 'Discounted Cash Flow (DCF) Calculator';
      case 'wacc':
        return 'Weighted Average Cost of Capital (WACC) Calculator';
      case 'lbo':
        return 'Leveraged Buyout (LBO) Calculator';
      case 'comps':
        return 'Comparable Companies Analysis Calculator';
      case 'accretion':
        return 'Accretion/Dilution Analysis Calculator';
      default:
        return 'Financial Calculator';
    }
  };
  
  return (
    <div className="financial-calculator" data-testid="calculator">
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-primary text-white py-3">
          <h4 className="card-title mb-0">{getCalculatorTitle()}</h4>
        </div>
        <div className="card-body p-4">
          {renderCalculator()}
          
          <div className="d-grid">
            <button 
              className="btn btn-primary btn-lg" 
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      
      {results && (
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-light py-3">
            <h4 className="card-title mb-0">Results</h4>
          </div>
          <div className="card-body p-4">
            {renderResults()}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialCalculator;
