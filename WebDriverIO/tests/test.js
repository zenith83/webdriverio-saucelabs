const assert = require('assert');

describe('Test', function () { 
	
	it('Checks the title', async () => {
		browser.url('/');
		const title = await browser.getTitle();
		assert(title == 'Google');	
		
	});
});
