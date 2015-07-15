var Jade = require('jade')

function jade(source, options) {
	if (options.cache === undefined) {
		options.cache = false
	}
	if (options.pretty === undefined) {
		options.pretty = '\t'
	}
	options.filename = this.src
	return Jade.render(source, options)
}

jade.defaults = {
	accept: ['.jade'],
	ext: '.html'
}

module.exports = jade
