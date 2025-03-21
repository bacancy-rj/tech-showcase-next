export default function Page() {
  return (
    <div className='prose prose-sm dark:prose-invert max-w-none'>
      <h1 className='!dark:text-white text-xl font-bold'>Layouts</h1>

      <ul>
        <li>
          A layout is UI that is shared between multiple pages. On navigation, layouts preserve
          state, remain interactive, and do not re-render. Two or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>
    </div>
  );
}
