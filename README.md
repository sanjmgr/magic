# Magic-bulb

This project demostrate the usage of magic link for signing transaction in ICON through mail address.

## Task 2: Add new color.

There are currently only 4 colors (red, green, blue, yellow) that can be set. Add a new button to set the color to white.
Does this new color actually get set? If not, what changes are required in the contract side (/Magic-SCORE/magic/magic.py) to make this work? You can put this answer as a comment in the JS code itself.

> **Comment:** If the case is just adding one more button with white color on the front side, this is piece of cake but which is not the only requirement on our case, we are expecting to be functional as well while making a transaction. So to achieve this, we have to add a new color ie. white in the `List(COLORS)` in /Magic-SCORE/magic/magic.py)

```Python
COLORS = ["RED","GREEN","BLUE","YELLOW", "WHITE"]
```

```Python
@external
def set_color(self, _color: str) -> None:
    if _color not in COLORS:
        revert(f'Invalid color')
    self._color.set(_color)
    self.Color(_color)
```
