module.exports = {
  apps: [
    {
      name: "data-insights-superset",
      interpreter: "bash",
      script: "gunicorn",
      args: '-w 2 -k gevent --worker-connections 100 --timeout 120 -b 0.0.0.0:6666 --limit-request-line 0 --limit-request-field_size 0 "superset.app:create_app()"',
    },
  ],
};
