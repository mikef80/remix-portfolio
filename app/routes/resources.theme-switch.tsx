import { useForm, getFormProps } from '@conform-to/react'
import { useFetcher } from '@remix-run/react'
import { Icon } from '#app/components/ui/icon.tsx'
import { type Theme } from '#app/utils/theme.server.ts'

export function ThemeSwitch({
  userPreference,
}: {
  userPreference?: Theme | null;
}) {
  const fetcher = useFetcher<typeof action>();

  const [form] = useForm({
    id: 'theme-switch',
    lastResult: fetcher.data?.result,
  });

  const mode = userPreference ?? 'system';
  const nextMode =
    mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system';
  const modeLabel = {
    light: (
      <Icon name="sun">
        <span className="sr-only">Light</span>
      </Icon>
    ),
    dark: (
      <Icon name="moon">
        <span className="sr-only">Dark</span>
      </Icon>
    ),
    system: (
      <Icon name="laptop">
        <span className="sr-only">System</span>
      </Icon>
    ),
  }

  return (
    <fetcher.Form
      method="POST"
      {...getFormProps(form)}
      action="/resources/theme-switch"
    >
      <input type="hidden" name="theme" value={nextMode} />
      <div>
        <button type="submit">
          {modeLabel[mode]}
        </button>
      </div>
    </fetcher.Form>
  );
}