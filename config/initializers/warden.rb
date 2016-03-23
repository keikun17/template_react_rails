Warden::Manager.after_set_user do |user,auth,opts|
  scope = opts[:scope]
  auth.cookies.signed["#{scope}.id"] = user.id

  # Expire cookie on log in
  auth.cookies.signed["#{scope}.expires_at"] = 30.minutes.from_now
end

# Invalidate cookie on logout
Warden::Manager.before_logout do |user, auth, opts|
  scope = opts[:scope]
  auth.cookies.signed["#{scope}.id"] = nil
  auth.cookies.signed["#{scope}.expires_at"] = nil
end
