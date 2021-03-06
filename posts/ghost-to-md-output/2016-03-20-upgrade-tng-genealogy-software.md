---
title: Upgrade TNG Genealogy Software
slug: upgrade-tng-genealogy-software
date_published: 2016-03-20T06:11:10.000Z
date_updated: 2016-03-20T06:11:10.000Z
---

I use [TNG (The Next Generation of Genealogy Sitebuilding)](http://lythgoes.net/genealogy/software.php) to run [www.furney.org](http://www.furney.org). The next version (v11) is out.

1. Back up existing files

- `cd /var/www/furney.org/backups`
- `mkdir 20160320 && cd 20160320`
- `cp ../../*.config .` (config.php, importconfig.php, logconfig.php, mapconfig.php)
- `cp ../../footer.php`
- `cp ../../index.* ` (index.html, index.php)
- `cp ../../meta.php`

1. Back up database tables

- Go to Admin > Utilities > Select all > Back up
- `mv ../*.bak .`

1. Download new files

- `cd /var/www`
- `curl http://tng.lythgoes.net/downloads11/tngupgrade1013-1100.zip -o tngupgrade1013-1100.zip -u username`
- `unzip tngupgrade1013-1100.zip -d tngupgrade1013-1100`

1. Check any differences for curiosity and to see which files would be missing if you just deleted all existing files and copied the new files in fresh

- `diff -rq furney.org/ tngupgrade1013-1100 | grep "Only in furney.org"`

1. Copy new files over existing files (subsequent step does the template directory too, so do that now anyway)

- `cp -r tngupgrade1013-1100/* furney.org/`

1. Open the upgrade readme file (readme1013-1100.html) in a web browser
2. Run the upgrade fileops script
3. Go to Config > General Settings > Table Names and add in the names for the 2 new tables as per suggestion
4. Run the database upgrade script
5. Delete all the upgrade files from the site
