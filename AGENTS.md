<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Page architecture
- Keep the Terapiar presentation in the index route and its semantic visual tokens in src/styles.css; the legacy stylesheet must not be imported because its global selectors override the design system.
- Use the existing Button component for calls to action, and point contact actions to the verified brand channel rather than placeholder checkout URLs so visitors do not reach an unrelated payment page.
- Keep offer availability and historical price references in src/lib/sales-offers.ts and test them; historical ebook figures must never become current service tariffs or income guarantees.
