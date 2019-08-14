defmodule LightSwitchServerWeb.PageController do
  use LightSwitchServerWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
