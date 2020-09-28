package example.Squizz.Enum;

public enum rightChoice {
    wrong(0),
    correct(1);

    private int value;

    private rightChoice(int value) {
        this.value = value;
    }

}


