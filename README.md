# voice-nav

## Description

Navigate through a web page application using your voice. Try `lab 9` or `home` or `table of contents`

## Running on OpenShift

Create a new project

```bash
oc new-project nav-talk  --display-name='nav-talk' --description='Voice Driven Navigation'
```

Create the node.js application using STI

```bash
oc new-app nodejs:latest~https://github.com/eformat/voice-nav --name=voicenav
```

Expose the service

```bash
oc expose svc/voicenav
```

Voice API in google chrome works best with SSL endpoint, so lets use default router self signed cert:

```bash
oc patch route/voicenav --type=json -p '[{"op":"add", "path":"/spec/tls", "value":{"termination":"edge","insecureEdgeTerminationPolicy":"Redirect"}}]'
```

Test at

- https://voicenav-nav-talk.apps.bar.com
