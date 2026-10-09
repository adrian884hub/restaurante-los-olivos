# Bug reports

Bugs found in the first version of the page and how they were fixed in the current version.

## BUG-01: The "Reservar ahora" button did not make a real reservation

- **Severity:** Medium
- **Steps:** open the page and click "Reservar ahora".
- **Expected result:** the user can send their reservation details.
- **Actual result:** only a browser alert saying "Reserva enviada!" appeared, without asking for or sending any data.
- **Fix:** replaced with a reservation form that builds the message and sends it through WhatsApp.
- **Status:** Fixed. Verified with TC-10.

## BUG-02: A reservation could be made without filling in any data

- **Severity:** High
- **Steps:** try to book without entering a name, date or party size.
- **Expected result:** a message showing what is missing.
- **Actual result:** the reservation was confirmed anyway.
- **Fix:** validation on every field, a visible error message, fields marked in red and past dates blocked.
- **Status:** Fixed. Verified with TC-07, TC-08, TC-09 and TC-11.

## BUG-03: Broken layout on mobile

- **Severity:** Low
- **Steps:** open the page on a phone or in the browser's responsive mode.
- **Expected result:** the content adapts to the screen width.
- **Actual result:** the navigation menu did not adapt and the links did not lead to any section.
- **Fix:** drop-down menu for mobile, working links and columns that collapse into one on small screens.
- **Status:** Fixed. Verified with TC-04, TC-13 and TC-14.

## BUG-04: Hero photo with a third-party watermark

- **Severity:** Low
- **Steps:** open the page and look at the bottom-right corner of the first photo.
- **Expected result:** photos without watermarks and with a free-use license.
- **Actual result:** one of the photos showed a photographer's name and had no license stated.
- **Fix:** every photo was replaced with freely licensed images from Wikimedia Commons, and credits were added.
- **Status:** Fixed.
