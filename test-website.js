// Test script for the Investment Banking interview preparation website
// This script will test the functionality of key components and pages

// Create a test directory if it doesn't exist
const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, 'tests');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
}

// Import testing libraries
const { chromium } = require('playwright');
const assert = require('assert');

// Test configuration
const config = {
  baseUrl: 'http://localhost:3000',
  viewports: [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 }
  ],
  pages: [
    { path: '/', name: 'Home' },
    { path: '/accounting', name: 'Accounting' },
    { path: '/accounting/income-statement', name: 'Income Statement' },
    { path: '/valuation-principles', name: 'Valuation Principles' },
    { path: '/intrinsic-valuation', name: 'Intrinsic Valuation' },
    { path: '/relative-valuation', name: 'Relative Valuation' },
    { path: '/mergers-acquisitions', name: 'M&A' },
    { path: '/leveraged-buyouts', name: 'LBO' },
    { path: '/market-dynamics', name: 'Market Dynamics' },
    { path: '/behavioral-questions', name: 'Behavioral Questions' }
  ]
};

// Main test function
async function runTests() {
  console.log('Starting tests for Investment Banking interview preparation website');
  
  const browser = await chromium.launch({ headless: true });
  const results = {
    functional: {},
    responsive: {},
    performance: {}
  };
  
  try {
    // Functional tests
    console.log('\n--- Running functional tests ---');
    results.functional = await runFunctionalTests(browser);
    
    // Responsive tests
    console.log('\n--- Running responsive tests ---');
    results.responsive = await runResponsiveTests(browser);
    
    // Performance tests
    console.log('\n--- Running performance tests ---');
    results.performance = await runPerformanceTests(browser);
    
    // Generate test report
    generateTestReport(results);
    
  } catch (error) {
    console.error('Test error:', error);
  } finally {
    await browser.close();
  }
  
  console.log('\nTests completed. See test-report.json for detailed results.');
}

// Functional tests
async function runFunctionalTests(browser) {
  const results = {};
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Test navigation and page loading
  console.log('Testing navigation and page loading...');
  results.navigation = { success: true, failures: [] };
  
  for (const pageConfig of config.pages) {
    try {
      console.log(`  Testing page: ${pageConfig.name}`);
      await page.goto(`${config.baseUrl}${pageConfig.path}`);
      await page.waitForLoadState('networkidle');
      
      const title = await page.title();
      assert(title.includes('Investment Banking'), `Page title should contain "Investment Banking", got: ${title}`);
      
      // Check for critical elements
      const hasHeader = await page.locator('header').count() > 0;
      const hasFooter = await page.locator('footer').count() > 0;
      const hasMainContent = await page.locator('main, .container').count() > 0;
      
      assert(hasHeader, 'Page should have a header');
      assert(hasFooter, 'Page should have a footer');
      assert(hasMainContent, 'Page should have main content');
      
      console.log(`  ✓ ${pageConfig.name} page loaded successfully`);
    } catch (error) {
      console.error(`  ✗ Error testing ${pageConfig.path}:`, error.message);
      results.navigation.success = false;
      results.navigation.failures.push({
        page: pageConfig.path,
        error: error.message
      });
    }
  }
  
  // Test interactive components
  console.log('\nTesting interactive components...');
  results.components = { success: true, failures: [] };
  
  // Test components on specific pages
  const componentTests = [
    { 
      name: 'Quiz', 
      path: '/accounting/income-statement', 
      selector: '.quiz-container, [data-testid="quiz"]',
      interactions: async () => {
        // Click on an answer option if available
        const hasAnswerOptions = await page.locator('.quiz-answer').count() > 0;
        if (hasAnswerOptions) {
          await page.locator('.quiz-answer').first().click();
          await page.locator('button:has-text("Check Answer")').click();
        }
      }
    },
    { 
      name: 'Flashcard', 
      path: '/valuation-principles/valuation-fundamentals', 
      selector: '.flashcard-container, [data-testid="flashcard"]',
      interactions: async () => {
        // Flip the flashcard if available
        const hasFlashcard = await page.locator('.flashcard').count() > 0;
        if (hasFlashcard) {
          await page.locator('.flashcard').click();
        }
      }
    },
    { 
      name: 'Financial Calculator', 
      path: '/intrinsic-valuation/dcf-fundamentals', 
      selector: '.financial-calculator, [data-testid="calculator"]',
      interactions: async () => {
        // Click calculate button if available
        const hasCalculateButton = await page.locator('.financial-calculator button:has-text("Calculate")').count() > 0;
        if (hasCalculateButton) {
          await page.locator('.financial-calculator button:has-text("Calculate")').click();
        }
      }
    }
  ];
  
  for (const test of componentTests) {
    try {
      console.log(`  Testing component: ${test.name}`);
      await page.goto(`${config.baseUrl}${test.path}`);
      await page.waitForLoadState('networkidle');
      
      const componentExists = await page.locator(test.selector).count() > 0;
      if (componentExists) {
        await test.interactions();
        console.log(`  ✓ ${test.name} component tested successfully`);
      } else {
        throw new Error(`Component ${test.name} not found on page ${test.path}`);
      }
    } catch (error) {
      console.error(`  ✗ Error testing ${test.name}:`, error.message);
      results.components.success = false;
      results.components.failures.push({
        component: test.name,
        page: test.path,
        error: error.message
      });
    }
  }
  
  await context.close();
  return results;
}

// Responsive tests
async function runResponsiveTests(browser) {
  const results = { viewports: {} };
  
  for (const viewport of config.viewports) {
    console.log(`Testing responsive design on ${viewport.name} (${viewport.width}x${viewport.height})...`);
    results.viewports[viewport.name] = { success: true, failures: [] };
    
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height }
    });
    
    const page = await context.newPage();
    
    // Test a subset of pages for responsive design
    const pagesToTest = [
      { path: '/', name: 'Home' },
      { path: '/accounting', name: 'Accounting' },
      { path: '/behavioral-questions', name: 'Behavioral Questions' }
    ];
    
    for (const pageConfig of pagesToTest) {
      try {
        console.log(`  Testing page: ${pageConfig.name} on ${viewport.name}`);
        await page.goto(`${config.baseUrl}${pageConfig.path}`);
        await page.waitForLoadState('networkidle');
        
        // Check for viewport-specific elements
        if (viewport.name === 'mobile') {
          // Mobile should have a hamburger menu
          const hasMobileMenu = await page.locator('.navbar-toggler, [data-testid="mobile-menu"]').count() > 0;
          assert(hasMobileMenu, 'Mobile view should have a hamburger menu');
        }
        
        // Take a screenshot for visual comparison
        await page.screenshot({ 
          path: path.join(testDir, `${pageConfig.name.toLowerCase()}-${viewport.name}.png`),
          fullPage: true 
        });
        
        console.log(`  ✓ ${pageConfig.name} page is responsive on ${viewport.name}`);
      } catch (error) {
        console.error(`  ✗ Error testing ${pageConfig.path} on ${viewport.name}:`, error.message);
        results.viewports[viewport.name].success = false;
        results.viewports[viewport.name].failures.push({
          page: pageConfig.path,
          error: error.message
        });
      }
    }
    
    await context.close();
  }
  
  return results;
}

// Performance tests
async function runPerformanceTests(browser) {
  const results = { pages: {} };
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Test loading performance of key pages
  const pagesToTest = [
    { path: '/', name: 'Home' },
    { path: '/accounting/income-statement', name: 'Content Page' },
    { path: '/behavioral-questions/tell-me-about-yourself', name: 'Interactive Page' }
  ];
  
  for (const pageConfig of pagesToTest) {
    try {
      console.log(`Testing performance of: ${pageConfig.name}`);
      
      // Measure page load time
      const startTime = Date.now();
      await page.goto(`${config.baseUrl}${pageConfig.path}`);
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;
      
      console.log(`  ✓ ${pageConfig.name} loaded in ${loadTime}ms`);
      
      results.pages[pageConfig.name] = {
        path: pageConfig.path,
        loadTime,
        success: true
      };
    } catch (error) {
      console.error(`  ✗ Error testing performance of ${pageConfig.path}:`, error.message);
      results.pages[pageConfig.name] = {
        path: pageConfig.path,
        error: error.message,
        success: false
      };
    }
  }
  
  await context.close();
  return results;
}

// Generate test report
function generateTestReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      functional: results.functional.navigation.success && results.functional.components.success,
      responsive: Object.values(results.responsive.viewports).every(v => v.success),
      performance: Object.values(results.performance.pages).every(p => p.success)
    },
    details: results
  };
  
  fs.writeFileSync(
    path.join(testDir, 'test-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\nTest Report Summary:');
  console.log(`Functional Tests: ${report.summary.functional ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`Responsive Tests: ${report.summary.responsive ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`Performance Tests: ${report.summary.performance ? '✓ PASS' : '✗ FAIL'}`);
}

// Run the tests
runTests().catch(console.error);
