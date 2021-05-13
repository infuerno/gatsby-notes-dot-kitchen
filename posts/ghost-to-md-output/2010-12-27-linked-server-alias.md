---
title: Linked server alias
slug: linked-server-alias
date_published: 2010-12-27T12:41:18.000Z
date_updated: 2010-12-27T12:41:18.000Z
tags: sql
---

Add a linked server using a different name **or** add a reference to the local server using a different name (handy if importing databases which used to be on different servers, but temporarily on the same server).

> sp_addlinkedserver 'Alias', '', 'SQLOLEDB', 'ServerName'
