import { translationService } from './translationService';

export const translatePageToEnglish = async () => {
  try {
    await translationService.translatePage('en');
  } catch (error) {
    console.error('Error translating page:', error);
  }
};

export const restoreOriginalSpanish = () => {
  try {
    translationService.restoreOriginalTexts();
  } catch (error) {
    console.error('Error restoring original text:', error);
  }
};
