# TODO - Component Checks & Improvements

## SelectedWork.jsx

- [x] Reviewed animation code
- [x] Reverted to original state (user requested)

## Service.jsx

- [x] Reviewed style & mobile screen
- [x] Fixed invalid easing `ease: "easeout"` → `"easeOut"`
- [x] Fixed typo `-translalte-y-1/3` → `-translate-y-1/3`
- [x] Fixed invalid `opacity:100` → `opacity-100`
- [x] Fixed `md:group-hover:rotate-10` → `rotate-12`
- [x] Mobile: vertical stack layout (Option C)
- [x] Build verified

## Skills.jsx

- [x] Reviewed skills section
- [x] Fixed duplicate key warning (`key={index}` → `key={`marquee-${index}`}`)
- [x] Reduced heading slide distance (`x: 480` → `x: 100`)
- [x] Build verified
