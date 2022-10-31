# OVERVIEW
Testing wanted queries


# High Level

1. Test Error Message display
    * Test Criteria: enter invalid height - 12
    * Entry Criteria: latest version, chrome, windows
    * Exit Criteria: test passes

2. Test to see if it breaks in other browsers
    * Test Criteria: Submit form properly on IE
    * Entry Criteria: Latest Version, IE
    * Exit Criteria: test passes

# Low Level

1. Submit 3 identical forms to Enter Page
    * Test Criteria: submit the same form 3 times
    * Entry Criteria: a form, latest version
    * Exit Criteria: Only one form is made

2. Submit on modify w/ empty form
    * Test Criteria: make no changes, hit submit
    * Entry Criteria: latest version
    * Exit Criteria: no changes are made, error is thrown.


# Sanity Level

1. Run through whole site.
    * Test Criteria: Submit a form, modify it, then delete it
    * Entry Criteria: Latest version
    * Exit Criteria: tests pass