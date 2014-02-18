var expect = require('expect.js');
var fs  = require('fs');

	describe('Webshot Test!!!...', function(){
		
		it('Test :1 ', function(done){

			expect(fs.existsSync('build/about.png')).to.be.ok();
			expect(fs.existsSync('build/index.png')).to.be.ok();
			expect(fs.existsSync('build/portfolio.png')).to.be.ok();
			expect(fs.existsSync('build/services.png')).to.be.ok();
			expect(fs.existsSync('build/singleproject.png')).to.be.ok();
			done();

		});

});