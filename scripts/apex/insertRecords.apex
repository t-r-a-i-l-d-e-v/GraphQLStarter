String[] prefixVariations = new String[] { 'Test', 'Sample', 'Awesome' };

Integer numAccs = 5555;
Integer numContacts = 1111;
Integer numTestObjects = 333;


Account[] accs = new List<Account>();
for (Integer i = 0; i < numAccs; i++) {
    accs.add(new Account(
        Name = prefixVariations[Math.mod(i, prefixVariations.size())] + ' Account ' + i
    ));
}
insert accs;

Contact[] contacts = new List<Contact>();
for (Integer i = 0; i < numContacts; i++) {
    contacts.add(new Contact(
        FirstName = prefixVariations[Math.mod(i, prefixVariations.size())],
        Account = accs[i],
        LastName = 'Contact' + i
    ));
}
insert contacts;


TestObject__c[] testObjects = new List<TestObject__c>();
for (Integer i = 0; i < numTestObjects; i++) {
    Boolean isActive = Math.mod(i, 2) == 0;
    TestObject__c obj = new TestObject__c(
        Name = prefixVariations[Math.mod(i, prefixVariations.size())] + ' Object ' + i,
        Active__c = isActive,
        Amount__c = i / 2 + 1111,
        Type__c = !isActive ? 'One' : (new String[] { 'Two', 'Three' })[Math.mod(i, 2)],
        SubTypes__c = !isActive ? (new String[] { 'A', 'B' })[Math.mod(i, 2)] : (new String[] { 'C', 'D', 'E', 'F' })[Math.mod(i, 4)]
    );
    testObjects.add(obj);
}