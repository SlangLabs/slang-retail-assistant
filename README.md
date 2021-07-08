# Slang Retail Voice Assistant

Slang Retail Assistant Extension lets developer add voice assistant to magento 2 store in a truely no-code way.

To create your first retail assistant [click here](https://docs.slanglabs.in/slang/getting-started/integrating-slang-retail-assistant/setting-up-the-assistant).


Upload custom skus for better nlp recognisition and train the assistant [docs link](https://docs.slanglabs.in/slang/advanced-topics/customizing-the-assistant/customizing-subdomain-data).

The extension follows the following practices:

- A minimum of PHP 5.3 is required.
- composer v2.0.0

### Installation

Run this commands from the magento root diirectory:

```shell
$ composer require Slanglabs/slang-retail-assistant
$ bin/magento setup:upgrade
```

### Usage

- After Installation, You would see configuratiion setting on the magento admin store.
  Go to `Store > Configuration > Slang Assistant > Retail Voice Assistant`.
- Update the form with the credentials from slang console and select multiple languages of your preference.
- Save the config and clean up the cache.
  ```shell
  # cache cleanup command from magento root directory
    $ bin/magento cache:clean
  ```
- Head over to the magento store and you should see a slang microphone appears on the bottom right corner of the screen.
