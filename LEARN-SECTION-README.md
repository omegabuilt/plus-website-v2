# Learn Section - Hidden (Pending Development)

## Status: Hidden from navigation

The **Learn** page and all references to it have been temporarily hidden from the website until the section is fully developed.

## What was hidden

- **Navbar**: The Learn link has been commented out in `src/components/Navbar.tsx` (line 19). FAQ is now the last nav item.
- **Footer**: The Learn link has been removed from the Company column in `src/components/Footer.tsx`.

## The Learn page still exists

The page file at `src/app/learn/page.tsx` has **not** been deleted. It is still in the codebase and can be accessed directly via `/learn` if needed. It simply isn't linked from anywhere on the site.

## To restore the Learn section

1. **Navbar** (`src/components/Navbar.tsx`): Uncomment the Learn link in the `navLinks` array:
   ```tsx
   // { href: "/learn", label: "Learn" }, // Hidden until Learn section is developed
   ```
   Change to:
   ```tsx
   { href: "/learn", label: "Learn" },
   ```

2. **Footer** (`src/components/Footer.tsx`): Add the Learn link back in the Company column (after the FAQ list item):
   ```tsx
   <li>
     <Link href="/learn" className="text-white/70 hover:text-white transition-colors text-sm">
       Learn
     </Link>
   </li>
   ```

## Date hidden
February 2026
