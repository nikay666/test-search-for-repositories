export const formatNumberByStringThousand = (num: number): string  => {
  return num >= 1000 ? `${(num / 1000).toPrecision(2)}k` : `${num}`
}

export const getFormattedStringOfTitle = (title: number | string): string  => {
  return typeof title === 'number' ? formatNumberByStringThousand(title): title;
};
