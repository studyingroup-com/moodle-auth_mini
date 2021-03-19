[![Build Status](https://travis-ci.org/catalyst/moodle-auth_mini.svg?branch=master)](https://travis-ci.org/catalyst/moodle-auth_mini)

# Moodle Mini Registration (with Possibility of Extending data asked to users, Email-self registration and Enrolment key)

This Mini Registration plugin can do the max! In the MINImal version, it allows Registration of new user with only Email address and Username. 

But it can be extended, by only choosing it in the settings, with:

* Add new additional fields. Those fields are those among "First name", "Last name", "City" and "Country". You cannot add new field outside of this choice though. You can make each one of this field as "required", i.e the user **must** fill the one chosen.
* Email-based self-registration
* Enrolment token key: This auth plugin is a clone of the plugin [Enrolment Key based Self-Registration](https://moodle.org/plugins/auth_enrolkey). It turns registration into a streamlined process making it much faster for students to get into a course. For the student it saves around 9-10 clicks and avoids context switching between a browser and their email client where they can become easily become disengaged or run into issues if their email is unavailable.

**How does Enrolment token key based Self-registration work?**
 
This is a optional feature of this plugin (see below how to enable it). 

When a user enters a valid token, provided by the teacher of the course, it will automatically enrol them into the course that token was specified for, and then take them directly to that course. Also an optional bonus setting: because they have demonstrated knowledge of a secret code we know they are a real human so we let them straight in without forcing them to confirm their email. For some use cases where they may login and complete their course in a single session we may not ever care about their email being valid.

Courses that provide self enrolment can restrict access to them with a key. If the signup token matches any course enrolment key then the new user will be enrolled into those courses. 

Found in the Moodle plugins directory at [https://moodle.org/plugins/auth_mini](https://moodle.org/plugins/auth_mini)


* [Branches](#branches)
* [Installation](#installation)
* [Setup](#setup)
* [Settings](#settings)
* [Admin Usage](#admin-usage)
* [Client Usage](#client-usage)
* [TODO](#todo)
* [Support](#support)


Branches
--------

For all current moodle installations, use the master branch.

Installation
------------ 

Add the plugin to /auth/

Run the Moodle upgrade.

Setup
-----
First enable the Mini Email or Token self-registration plugin for use.

`Site administration > Plugins > Authentication > Manage Authentication`

On the same page that you manage authentication options, scroll down to the common settings and select `Mini Email or Token self-registration` in the Self Registration drop down list for `registerauth`.
    
Enable the Mini Email or Token registration plugin.

`Site administration > Plugins > Enrolments > Manage enrol plugins`
    
Settings
--------

* For Enrolment token key based self-registration:

It is possible to force the the enrolment key as a required element for signing up.

Admin Usage
-----------
* For Enrolment token key based self-registration

 *Course enrolment keys*

Enable a new Self enrolment method in the course required. 

`Course administration > Users > Enrolment methods > Add method > Self enrolment`

The Enrolment key field that is visible will be used for the automatic enrolment on signup.

When creating new Self enrolment method, provide a custom instance name that is descriptive enough to determine how and when this specific instance will be used for enrolling.

Please add additional Self enrolment methods for the course that you require automatic enrolment access for.

 *Group enrolment keys*

If you select `Use group enrolment keys: Yes` during creating of a new Self enrolment method, it enables a functionality of automatic adding self enrolled students to the groups created in the course.

In order for that to work, create a group in the course and specify `Enrolment key`. 

Please note, that this key must be different from the course enrollment key which you set in the course Self enrolment method.

As a result, students will be able to subscribe using the group enrolment key. That will enrol them to the course where the group was created and also will add them to that group.

Client Usage (for enrolment token based registration)
------------

When a user tries to log in they are given the option to create an account.

The user can enter a token into the field name `Enrolment key`. 

There is an optional setting that can force this field to be required.

If the token matches **any** valid instance of self enrolment, then the user will be enrolled to those courses.  

TODO
----

Add option to bypass view.php, this may not be required if only enroling into one course.

Support
-------
For any issue with the plugin, please log the in the github repository [here](https://github.com/studyingroup-com/moodle-auth_mini/issues).

If you wish to learn a new way of studying, you can visit [studyingroup.com](https://studyingroup.com), the website to study any subject by creating study group!

Thanks a lot for the initial plugin developed by [Catalyst IT Australia](https://www.catalyst-au.net/) on which this plugin is based.

