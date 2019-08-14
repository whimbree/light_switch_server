defmodule LightSwitchServer.Repo do
  use Ecto.Repo,
    otp_app: :light_switch_server,
    adapter: Ecto.Adapters.Postgres
end
