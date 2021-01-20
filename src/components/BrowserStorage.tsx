import React from 'react';

class BrowserStorage {
  // Desktop Notifications
  public tokens = {
      accessToken: '',
      refreshToken: '',
  };

  private applyProperties(props: BrowserStorage): void {
    Object.keys(props).map((key) => ((this as any)[key] = (props as any)[key]));
  }

  constructor() {
    this.load();
  }

  public load(): BrowserStorage {
    this.applyProperties({
      ...JSON.parse(localStorage.getItem('powper') ?? '{}'),
    });
    return this;
  }

  public save(): void {
    localStorage.setItem('powper', JSON.stringify(this));
  }
}

const useBrowserStorage = (): BrowserStorage => {
  const [browserStorage] = React.useState(new BrowserStorage());
  return browserStorage;
};

export default useBrowserStorage;
