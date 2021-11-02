This is a test repo.

steps
- add a new nodejs project in elastic-beanstalk
- add github repo to codepipeline and connect with the app

adding environment variables:
- elastic-beanstalk > configuration > software > Environment properties

adding ssl
- request a certificate in certificate manager - add cname record for given certificate
- elastic-beanstalk > configuration > load balancer
- add listener for port 443 and attach certificate and apply
- add cname record with environment url

new-version
- after an update elastic-beanstalk > Application versions > choose version > deploy

terminate-app
- select and terminate
- also detete codepipeline, certificate manager