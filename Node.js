

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


Post job cleanup.
/usr/bin/git version
git version 2.46.0
Temporarily overriding HOME='/home/runner/work/_temp/39db0bc5-de02-4564-92aa-a2057fab8204' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/NomadsComputerllc/NomadsComputerllc
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
0s
Cleaning up orphan processes
