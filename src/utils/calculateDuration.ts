const calculateDuration = (type: string | null, launchDate: string, endDate: string) => {
    if (!launchDate || !endDate) return 0;

    const launchDateObj = new Date(launchDate);
    const endDateObj = new Date(endDate);
    const diffInMs = endDateObj.getTime() - launchDateObj.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    switch (type) {
        case 'daily':
          return diffInDays;
        case 'weekly':
          return diffInDays / 7;
        case 'monthly':
          return diffInDays / 28;
        default:
          return 0;
      }
}

export default calculateDuration;
