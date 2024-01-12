from django.shortcuts import render
from .forms import ContactForm
# Create your views here.


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'contact/thankyou.html')
    else:
        form = ContactForm()
    return render(request, 'templates/profile_site/contact.html', {'form': form})
