function tipAmount(total, service) {
    if (service == 'good') {
        return total * 1.2;
    } else if (service == 'fair') {
        return total * 1.15;
    } else if (service == 'bad') {
        return total * 1.1;
    }
}