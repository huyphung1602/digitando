class HomeController < ApplicationController
  def index
    render inertia: 'components/App', props: {}
  end
end
