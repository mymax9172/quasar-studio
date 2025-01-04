export class DataSource {
  name;
  type;
  provider;
  config;
  critical;

  constructor(name, type, provider, config, critical) {
    this.name = name;
    this.type = type;
    this.provider = provider;
    this.config = config;
    this.critical = critical;
  }
}
