class EventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(event)
    ActionCable.server.broadcast 'activity_channel', message: render_event(event)
  end
end
