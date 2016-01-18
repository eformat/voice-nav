# voice-nav

## Running on OpenShift3

Create a new project

    oc new-project nav-talk  --display-name='nav-talk' --description='Voice Driven Navigation'

Create the node.js application using STI

    oc new-app registry.access.redhat.com/openshift3/nodejs-010-rhel7:latest~https://github.com/eformat/voice-nav --name=voicenav

Expose the service

    oc expose svc/voicenav

Voice API in google chrome works best with SSL endpoint, so lets use default router self signed cert:

    oc get route/voicenav -o yaml | sed -e '/host/a\ \ tls:\n \ \ \ \ termination: edge' | oc replace -f -

Test at

    https://voicenav-nav-talk.apps.bar.com
