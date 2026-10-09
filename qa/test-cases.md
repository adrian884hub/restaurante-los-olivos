# Test cases

Manual tests for the sample page "Restaurante Los Olivos".
Browsers used: Chrome and Firefox (desktop) and Chrome on Android (375 px responsive mode).

| ID | Feature | Steps | Expected result | Status |
|----|---------------|-------|--------------------|--------|
| TC-01 | Page load | Open the published URL | The page loads with no console errors and the hero shows the first photo | Passed |
| TC-02 | Hero carousel | Wait 6 seconds on the hero | The photo changes with a smooth transition and the matching indicator is highlighted | Passed |
| TC-03 | Carousel indicators | Click the second indicator | The second photo is shown and the timer restarts | Passed |
| TC-04 | Navigation | Click "Menú", "Nosotros" and "Contacto" | The page scrolls to each section without the header covering the title | Passed |
| TC-05 | Header on scroll | Scroll down more than 40 px | The header changes from transparent to a white background with dark text | Passed |
| TC-06 | Menu tabs | Click "Principales", "Postres" and "Vinos" | Only the selected category is shown and the tab stays highlighted | Passed |
| TC-07 | Empty form | Click "Enviar reserva por WhatsApp" without filling anything in | The message "Completá todos los campos..." appears and empty fields are marked in red | Passed |
| TC-08 | Past date | Try to pick a date before today | The date picker does not allow it | Passed |
| TC-09 | Party size out of range | Enter 0 or 15 in "Personas" and submit | The field is marked as invalid and the form is not sent | Passed |
| TC-10 | Valid reservation | Fill in every field and submit | WhatsApp opens with a message that includes name, phone, date (dd/mm/yyyy), time and party size | Passed |
| TC-11 | Error correction | Submit empty, then type in a marked field | The red border disappears while typing | Passed |
| TC-12 | Floating WhatsApp button | Click the green button | WhatsApp opens in a new tab with a starter message | Passed |
| TC-13 | Mobile menu | At 375 px, tap the three-line button and then a link | The menu opens, the icon turns into an X and the menu closes after choosing an option | Passed |
| TC-14 | Mobile layout | Scroll through the whole page at 375 px | There is no horizontal scrolling and columns collapse into one | Passed |
| TC-15 | Reduced motion | Turn on "reduce motion" in the operating system and reload | Animations are disabled and all content is visible | Passed |
