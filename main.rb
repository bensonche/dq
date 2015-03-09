require 'sinatra/base'

class App < Sinatra::Application
	def initialize
		super

		@js_include = ''
		@css_include = ''

		js_list = [
			'//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
			'//cdnjs.cloudflare.com/ajax/libs/json2/20140204/json2.min.js',
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js',
			'//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js',
			'//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js',

			'js/main.js',
			'js/views/dqView.js',
			'js/views/mainView.js',
			'js/views/attributeView.js',
			'js/views/counterView.js',
			'js/views/counterSetView.js',
			'js/views/characterStatusView.js',

			'js/models/counter.js',
			'js/models/attribute.js',
		]

		css_list = [
			'css/dq.css'
		]

		js_list.each do |x|
			@js_include << get_js(x)
		end

		css_list.each do |x|
			@css_include << get_css(x)
		end
	end

	def get_js(name)
		"<script src='#{name}'></script>"
	end

	def get_css(name)
		"<link href='#{name}' type='text/css' rel='stylesheet'></link>"
	end

	get '/' do
		erb :index
	end
end
