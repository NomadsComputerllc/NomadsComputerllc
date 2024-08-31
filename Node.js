Run actions/setup-node@v4
  with:
    node-version: 20.x
    cache: npm
    always-auth: false
    check-latest: false
    token: ***
  env:
    AZURE_WEBAPP_NAME: your-app-name
    AZURE_WEBAPP_PACKAGE_PATH: .
    NODE_VERSION: 20.x
Found in cache @ /opt/hostedtoolcache/node/20.17.0/x64
Environment details
  node: v20.17.0
  npm: 10.8.2
  yarn: 1.22.22
/opt/hostedtoolcache/node/20.17.0/x64/bin/npm config get cache
/home/runner/.npm
