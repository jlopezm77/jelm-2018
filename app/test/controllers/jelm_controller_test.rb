require 'test_helper'

class JelmControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get jelm_index_url
    assert_response :success
  end

end
