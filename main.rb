require 'sinatra'

def ticks
	(Time.now.to_f * 1000).to_i
end

get '/' do
	erb :index
end
