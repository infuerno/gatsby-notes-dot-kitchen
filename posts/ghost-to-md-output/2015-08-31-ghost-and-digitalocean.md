---
title: Ghost and DigitalOcean
slug: ghost-and-digitalocean
date_published: 2015-08-31T22:33:14.000Z
date_updated: 2015-10-11T16:41:05.000Z
tags: tech, hosting
---

## Reference

- [https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-ghost-application](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-ghost-application)
- [http://support.ghost.org/mail](http://support.ghost.org/mail)

## Initial setup

Initial steps taken for creating a Ghost instance on DigitalOcean:

1. Create new droplet

- enter name
- choose size - smallest
- choose image - Ghost application
- upload ssh key

1. Create a new A name record at DNS provider (in this case domain is still using the registrar's name servers - [Gandi](https://www.gandi.net/)) for the `notes` subdomain pointing to the IP address of the droplet
2. SSH to droplet and update 2 x config files to update URL of Ghost instance
3. Restart Ghost service: `service ghost restart`
4. Browse to [http://notes.dot.kitchen/ghost](http://notes.dot.kitchen/ghost) to set up new user details (or use IP address while DNS propagates)
5. Sign up for [mailgun](https://mailgun.com) and add necessary DNS records at [Gandi](https://www.gandi.net/) to send email from dot.kitchen domain ![DNS zone settings for mailgun](http://res.cloudinary.com/squareoo/image/upload/v1441049775/mailgun_ttuo7c.png)
6. Wait for DNS to propagate (again)
7. Update config.js to enter mail settings from mailgun and restart ghost service `service ghost restart`
8. Test email by logging out and requesting a password reset going to settings > labs > send a test email

### Next steps

1. SSL for admin [http://support.ghost.org/setup-ssl-self-hosted-ghost/](http://support.ghost.org/setup-ssl-self-hosted-ghost/)
2. Modify the theme [http://support.ghost.org/ghost-themes-overview/](http://support.ghost.org/ghost-themes-overview/) or choose a new one [http://marketplace.ghost.org/](http://marketplace.ghost.org/)
3. Put together workflow for automatically uploading screenshots to [Cloudinary](http://cloudinary.com/) and copying resulting URL to clipboard ready to paste into post
