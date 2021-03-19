/* Automatically set to "checked" the checkbox for the item above the
   "required?" checkbox. This way, if the Admin checks "required country?", 
   the item "country" is automatically "checked" above, 
   i.e, it MUST be displayed to the user. */

   
/* Binding of the event "checked" on "required?" item. */

/* item "firstname" */
document.getElementById('id_s_auth_mini_requiredfirstname')
        .addEventListener('change', function()
{
    if (this.checked)
    {
        document.getElementById('id_s_auth_mini_enabledfirstname').checked = true;
    }
}, false);

/* item "lastname" */
document.getElementById('id_s_auth_mini_requiredlastname')
        .addEventListener('change', function()
{
    if (this.checked)
    {
        document.getElementById('id_s_auth_mini_enabledlastname').checked = true;
    }
}, false);

/* item "city" */
document.getElementById('id_s_auth_mini_requiredcity')
        .addEventListener('change', function()
{
    if (this.checked)
    {
        document.getElementById('id_s_auth_mini_enabledcity').checked = true;
    }
}, false);

/* item "country" */
document.getElementById('id_s_auth_mini_requiredcountry')
        .addEventListener('change', function()
{
    if (this.checked)
    {
        document.getElementById('id_s_auth_mini_enabledcountry').checked = true;
    }
}, false);

/* and conversely, if an item is NOT displayed, it CANNOT be required to the
   user. */

/* item "firstname" */
document.getElementById('id_s_auth_mini_enabledfirstname')
        .addEventListener('change', function()
{
    if (!this.checked)
    {
        document.getElementById('id_s_auth_mini_requiredfirstname').checked = false;
    }
}, false);

/* item "lastname" */
document.getElementById('id_s_auth_mini_enabledlastname')
        .addEventListener('change', function()
{
    if (!this.checked)
    {
        document.getElementById('id_s_auth_mini_requiredlastname').checked = false;
    }
}, false);

/* item "city" */
document.getElementById('id_s_auth_mini_enabledcity')
        .addEventListener('change', function()
{
    if (!this.checked)
    {
        document.getElementById('id_s_auth_mini_requiredcity').checked = false;
    }
}, false);

/* item "country" */
document.getElementById('id_s_auth_mini_enabledcountry')
        .addEventListener('change', function()
{
    if (!this.checked)
    {
        document.getElementById('id_s_auth_mini_requiredcountry').checked = false;
    }
}, false);