import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      searchPattern="[^a-zA-Z0-9_\\-+$@!\\*()=\\/\\\\]"
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        searchable
        searchPattern="[^a-zA-Z0-9_\-+$@!\*()=\/\\]"
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const searchableWithRestrictions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
