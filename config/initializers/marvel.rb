module FullStackEngineerRuby
  class Application
    config.marvel = Marvel::Client.new
    config.marvel.configure do |config|
      config.api_key      = config_for(:marvel)[:api_key]
      config.private_key  = config_for(:marvel)[:private_key]
    end
  end
end
