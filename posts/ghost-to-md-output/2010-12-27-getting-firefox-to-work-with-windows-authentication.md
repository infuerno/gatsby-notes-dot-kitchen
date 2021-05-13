---
title: Getting Firefox to work with Windows authentication
slug: getting-firefox-to-work-with-windows-authentication
date_published: 2010-12-27T14:20:19.000Z
date_updated: 2010-12-27T14:20:19.000Z
---

There are 3 settings you need to change in Firefox in order to get Firefox to work with Windows authentication.

In the address bar, type about:config

Find the following 3 properties:

- network.automatic-ntlm-auth.trusted-uris
- network.negotiate-auth.delegation-uris
- network.negotiate-auth.trusted-uris

You need to add the server you wish to authenticate to the end of the value associated with the property, so it should read something like “localhost, myserver.com”.

via [Getting Firefox to work with Windows authentication | Web Design Harrogate – Thinksynergy.co.uk](http://www.thinksynergy.co.uk/2009/12/16/getting-firefox-to-work-with-windows-authentication/).
